"use client";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

interface Url {
  long: string;
  short: string;
  copied: boolean;
}

const fetchUrl = async (url: string) => {
  const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
  return res.json();
};

function Shorten() {
  const [links, setLinks] = useState<Array<Url>>([]);
  const [url, setUrl] = useState<Url>({ long: "", short: "", copied: false });
  const [empty, setEmpty] = useState(false);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["urls", url.long],
    queryFn: async () => {
      const data = await fetchUrl(url.long);
      const newUrl = { ...url, short: data.result.full_short_link };
      setUrl(newUrl);
      setLinks([newUrl, ...links]);
      let oldData = sessionStorage.getItem("links") || "";

      if (oldData) {
        let oldUrls = JSON.parse(oldData);

        sessionStorage.setItem("links", JSON.stringify([newUrl, ...oldUrls]));
      } else {
        sessionStorage.setItem("links", JSON.stringify([newUrl]));
      }
      setUrl({ long: "", short: "", copied: false });

      return data;
    },
    enabled: false,
  });

  useEffect(() => {
    let value;
    value = sessionStorage.getItem("links") || "";
    if (value) {
      setLinks(JSON.parse(value));
    }
  }, []);

  const handleUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl({ ...url, long: e.target.value });
  };

  const handleShortenUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.long) {
      setEmpty(!empty);
    } else {
      refetch();
      setEmpty(false);
    }
  };

  const handleCopy = (linkToCopy: string) => {
    const modifiedLinks: Url[] = links.map((link) => {
      if (link.short == linkToCopy) {
        link.copied = true;
      }
      return link;
    });
    setLinks(modifiedLinks);
    navigator.clipboard.writeText(linkToCopy);
  };

  return (
    <>
      <form onSubmit={handleShortenUrl}>
        <div id="shorten">
          {" "}
          <div className="flex flex-col p-4 gap-3 bg-DarkViolet rounded-md m-4 bg-shorten-pattern">
            <input
              placeholder="Shorten a link here..."
              className={`rounded-md p-2 ${empty ? "border-Red border-2" : ""}`}
              value={url.long}
              onChange={(e) => handleUrl(e)}
            ></input>
            <button
              className="bg-Cyan rounded-md p-2 px-7 text-white hover:opacity-75"
              type="submit"
            >
              Shorten It!
            </button>
            {empty && <p className="text-Red text-start">Please add a link</p>}
          </div>
        </div>
      </form>

      {links &&
        links.map((link, idx) => {
          return (
            <div
              key={idx}
              id="links"
              className="flex flex-col p-4 gap-3 rounded-md m-4  bg-grey "
            >
              <p className="text-black text-start p-2">{link.long}</p>
              <hr />

              <p className="text-Cyan text-start p-2">{link.short}</p>
              <button
                className={`rounded-md p-2 px-7 text-white  ${
                  link.copied ? "bg-DarkViolet" : "bg-Cyan hover:opacity-75"
                } `}
                onClick={() => handleCopy(link.short)}
              >
                {link.copied ? "Copied!" : "Copy"}
              </button>
              <p></p>
            </div>
          );
        })}
    </>
  );
}

export default Shorten;
