import React, { Component } from "react";

const Music_card = ({ music }) => {

  return (
    <div key={music.id} className="flex py-2 my-2 w-full ease-in-out duration-500 px-4 hover:shadow-2xl rounded-[15px]">
      <img
        className="rounded-[20px]"
        src={music.image}
        alt="Sarafan"
        width={"80px"}
        height={"80px"}
      />
      <div className="flex justify-between items-center w-full">
      <div className="flex flex-col justify-center">
      <p className="font-normal text-xs px-4 opacity-70 line-clamp-1">
          {music.genre}
        </p>
        <p className="font-semibold md:text-xl text-lg px-4 line-clamp-1">
          {music.name}
        </p>
        <p className="font-normal md:text-lg text-sm px-4 opacity-70 line-clamp-1">
          {music.author}
        </p>
      </div>
      <p className="font-normal text-sm opacity-70">{music.duration}</p>
      </div>
    </div>
  );
};

export default Music_card;
