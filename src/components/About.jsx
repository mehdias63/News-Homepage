import React from "react";

export default function About() {
  return (
    <div className="mt-4 md:mt-6 lg:col-span-2 lg:row-start-2 ">
      <div>
        <div className=" bg-[url(/images/image-web-3-mobile.jpg)] h-[19.75rem] bg-no-repeat bg-cover md:bg-[url(/images/image-web-3-desktop.jpg)]"></div>
      </div>
      <div className="md:flex md:justify-center md:items-center">
        <div>
          <h1 className="text-[2.5rem] lg:text-[3rem] font-extrabold leading-10 lg:leading-[3.5rem] text-black my-6">
            The Bright Future of Web 3.0?
          </h1>
        </div>
        <div>
          <p className="text-gray text-[0.9375rem] leading-[1.625rem] mb-2 md:mt-2 md:ml-2 lg:mt-10">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-orange text-white px-10 py-4 text-sm font-bold leading-6 tracking-[0.27344rem] my-4 md:mt-8 hover:bg-black md:ml-2">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
