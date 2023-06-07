import React from "react";

function Shorten() {
  return (
    <>
    <div id="shorten">
      {" "}
      <div className="flex flex-col p-4 gap-3 bg-DarkViolet rounded-md m-4 bg-shorten-pattern">
        <input
          placeholder="Shorten a link here..."
          className="rounded-md p-2"
        ></input>
        <button className="bg-Cyan rounded-md p-2 px-7 text-white hover:opacity-75">
          Shorten It!
        </button>
      </div>
    </div>

    <div id="links" className="flex flex-col p-4 gap-3 rounded-md m-4  bg-GrayishViolet">
       <input className=" bg-GrayishViolet"/>
       <hr/>
       <input className="p-2  bg-GrayishViolet"/>
       <button className="bg-Cyan rounded-md p-2 px-7 text-white hover:opacity-75">Copy</button>

    </div>
    </>
  );
}

export default Shorten;
