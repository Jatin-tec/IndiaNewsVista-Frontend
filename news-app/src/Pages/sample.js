import React from "react";
import freefire from "./Assets/WhatsApp Image 2023-10-15 at 7.57.01 PM.jpeg.jpg";
import codm from "./Assets/WhatsApp Image 2023-10-15 at 7.57.02 PM.jpeg.jpg";
import pubg from "./Assets/WhatsApp Image 2023-10-15 at 7.57.02 PM (1).jpeg.jpg";
import counterStrike from "./Assets/WhatsApp Image 2023-10-15 at 7.57.04 PM (1).jpeg.jpg";
import valorent from "./Assets/20200621105514_1072679-1.jpg";

import sati from "./Assets/SATI Logo.png";
import flux from "./Assets/Flux Logo.png";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="background">
      <div className="flex items-center justify-between px-10 py-3 text-white">
        <Image src={sati} alt="SATI logo" className="w-[5vw]" />
        <h1 className="text-5xl font-extrabold">TECHNICAL CLUB ‘FLUX’</h1>
        <Image src={flux} alt="SATI logo" className="w-[5.5vw]" />
      </div>
      <div className="flex items-center justify-between h-[70vh] mt-[3vw] px-[9vw]">
        <div className="flex flex-col justify-between items-center h-full">
          <Block
            image={counterStrike}
            name="Counter strike"
            time="COming soon"
          />
          <Block image={codm} name="Call of duty" time="COming soon" />
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          <Block image={valorent} name="Valorant" time="28-29 Oct, 2023" />
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSd1AvigcfzccreTppftlWzV4ZXDMkKQ3yTJyCnXi5StDQxHZg/viewform?usp=sf_link"
            target="_blank"
          >
            <button className="uppercase text-white mx-auto bg-blue-400 text-lg border-4 border-blue-800 px-5 py-1 mt-2 font-bold rounded-xl hover:scale-105 transition-all">
              Register now
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-between items-center h-full">
          <Block image={pubg} name="BGMI" time="COming soon" />
          <Block image={freefire} name="Free Fire" time="COming soon" />
        </div>
      </div>
      <div className="px-[10vw] mt-[1vw] flex justify-between items-center">
        <button className="bg-gradient-to-br from-[#f37c3e] to-[#820ec6] text-white rounded-full px-5 py-1 font-semibold">
          FOLLOW US
        </button>
        <button className="bg-gradient-to-br from-[#ffa373] to-[#f37c3e] text-white rounded-full px-5 py-1 font-semibold">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

const Block = ({ image, name, time }) => {
  return (
    <div className="flex flex-col items-center text-white">
      <Image src={image} alt="Free fire" className="w-[21vw] rounded-3xl" />
      <h1 className="text-3xl mt-1 font-extrabold uppercase">{name}</h1>
      <p className="text-lg font-semibold uppercase">{time}</p>
    </div>
  );
};

export default Home;