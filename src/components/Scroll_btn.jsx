import React, { useState, useEffect } from "react";
import { AiOutlineUp } from "react-icons/ai";
import $ from 'jquery';

const Scroll_btn = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
	window.addEventListener('scroll', () => {
		if (window.scrollY > 100) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	});
 }, []);

    const scrollToTop = () => {
      $("html").animate(
        {
          scrollTop: 0,
        },
        500
      );
    }

  return (
    <div
      className={
        scroll
          ? "flex fixed w-[60px] h-[60px] right-4 bottom-4 bg-gray-900 items-center justify-center ease-in-out duration-500 rounded-[20px] md:hover:bg-gray-700 z-50 opacity-100"
          : "opacity-0 ease-in-out duration-500 flex fixed w-[60px] h-[60px] right-4 bottom-4 bg-gray-900 items-center justify-center rounded-[20px] z- 50"
      } onClick={scrollToTop}>
      <AiOutlineUp className="w-[50px] h-6 text-white" />
    </div>
  );
};

export default Scroll_btn;
