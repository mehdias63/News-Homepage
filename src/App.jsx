import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import News from "./components/News";
import Card from "./components/Card";

function App() {
  return (
    <main className=" min-h-screen font-inter p-3 grid grid-cols-1 lg:grid-cols-3 max-w-[90rem] lg:px-[8rem] lg:py-[5rem]">
      <Header />
      <About />
      <div className="bg-black text-white my-2 lg:col-span-2 lg:row-start-2 p-6 md:mt-6 lg:ml-5">
        <h1 className="text-yellow text-[2rem] md:text-[2.5rem] font-bold leading-8 md:leading-10 mb-10">
          News
        </h1>
        <News
          title="Hydrogen VS Electric Cars"
          text="Will hydrogen-fueled cars ever catch up to EVs?"
        />
        <News
          title="The Downsides of AI Artistry"
          text="What are the possible adverse effects of on-demand AI image generation?"
        />
        <News
          title="Is VC Funding Drying Up?"
          text="Private funding by VC firms is down 50% YOY. We take a look at what that means."
        />
      </div>
      <div className="lg:flex gap-4 lg:row-span-3 lg:col-span-3">
        <Card
          icon="/images/image-retro-pcs.jpg"
          number="01"
          title="Reviving Retro PCs"
          text="What happens when old PCs are given modern upgrades?"
        />
        <Card
          icon="/images/image-top-laptops.jpg"
          number="02"
          title="Top 10 Laptops of 2022"
          text="Our best picks for various needs and budgets."
        />
        <Card
          icon="/images/image-gaming-growth.jpg"
          number="03"
          title="The Growth of Gaming"
          text="How the pandemic has sparked fresh opportunities."
        />
      </div>
    </main>
  );
}

export default App;
