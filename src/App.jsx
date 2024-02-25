import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import News from "./components/News";
import Card from "./components/Card";

function App() {
  return (
    <main className=" min-h-screen p-4">
      <Header />
      <About />
      <div>
        <h1>News</h1>
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
      <div className="md:flex">
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
