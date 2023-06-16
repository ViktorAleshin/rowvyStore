import React, { useEffect } from "react";
import Typed from "react-typed";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import bgImg from "./../../../public/Pic/bg.webp";

const Content_header = () => {
  return (
    <Parallax bgImage={bgImg} bgImageStyle={{'object-fit': 'cover'}}  strength={600}>
      <div className="w-screen bg-gradient-to-b from-[#000300] from-15% opac">
        <div className="flex flex-col mt-[-96px] h-screen items-center max-w-[800px] mx-auto text-center w-full justify-center">
          <p className="uppercase text-[#E94560]">Growing with my beats</p>
          <h1 className="text-white text-4xl font-bold">Became a rapper</h1>
          <div className="md:flex md:gap-3 block">
            <p className="text-white md:text-3xl text-xl font-semibold mt-4">
              Record your track in the genre{" "}
            </p>
            <Typed
              className="text-white md:text-3xl text-xl font-semibold mt-4 opacity-80"
              strings={["DRILL", "TRAP", "RNB", "SUPERTRAP"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <button className="bg-[#E94560] mt-[30px] p-4 px-10 rounded-xl text-white text-xl">
            Catalog
          </button>
        </div>
      </div>
    </Parallax>
  );
};

export default Content_header;
