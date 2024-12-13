import React from "react";
import Nav from "./Nav";

const Footer = () => {
  return (
    <div className="h-screen bg-back">
      <div className="p-24 flex ">
        <div className="w-2/5">
          <Nav />
          <br />
          <br />

          <h1 className="text-6xl mt-9 text-fg">Let's Talk</h1>
          <br />
          <br />
          <p className="text-sm text-fg rounded-full p-4 border-fg border w-full">
            123 Anywhere St. Any City, ST 12345
          </p>
          <br />
          <p className="text-sm text-fg rounded-full p-4 border-fg border ">
            (123) 456-7890
          </p>
          <br />
          <p className="text-sm text-fg rounded-full p-4 border-fg border ">
            hello@reallygreatsite.com
          </p>
          <br />
          <div className="flex gap-15 text-xl mt-3 bg-fg  cursor-pointer rounded-full p-4 text-back justify-center items-center gap-1 hover:bg-back hover:border-fg hover:border hover:text-fg ">
            <p className="text-sm rounded-full p-4   ">GET SOCIAL</p>
            <i class="fa-brands fa-facebook"> </i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-square-instagram"></i>
          </div>

          <br />
        </div>
        <div className="mt-40 pl-48">
          <h1 className="text-6xl mb-10 text-fg">Business Hours</h1>
          <p className="p-9 bg-fg rounded-3xl text-sm">
            Monday to Friday 9:00 am to 6:00 pm <br />
            <br />
            Saturday <br />
            <br />
            9:00 am to 12 noon <br /> <br />
            <br />
            Sunday by appointment only
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
