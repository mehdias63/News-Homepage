import React from "react";

export default function About() {
  return (
    <div>
      <div>
        <div className=" bg-[url(/images/image-web-3-mobile.jpg)] h-[18.75rem] bg-no-repeat bg-cover md:bg-[url(/images/image-web-3-desktop.jpg)]"></div>
      </div>
      <div className="md:flex">
        <div>
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  );
}
