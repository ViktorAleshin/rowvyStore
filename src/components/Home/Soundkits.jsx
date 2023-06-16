import React from "react";
import Kit_card from "./Kit_card";
import { kits } from "../../kits.data.js";

const Soundkits = () => {
  return (
    <div className="flex items-center flex-col bg-white">
      <h1 className="font-bold text-4xl text-black mt-[70px]">Sound Kits</h1>
      <div>
        {kits.map(kit => (
          <Kit_card key={kit.id} kit={kit} />
        ))}
      </div>
    </div>
  );
};

export default Soundkits;
