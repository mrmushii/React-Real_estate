import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-back flex pt-16 gap-30">
        <div className="w-1/2">
          <img
            src="/public/Contact.jpg"
            alt=""
            srcset=""
            className="w-4/5 h-screen"
          />
        </div>
        <div className="mt-44 ">
          <h1 className="text-7xl text-fg p-3 ">
            Our vision is to be the <br /> most trusted and <br />
            respected real estate <br />
            agency in Roseton.
          </h1>
          <button className="ml-4 mt-8 px-20 p-4 border-fg border rounded-full text-fg hover:bg-fg hover:text-back">
            Contact us
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
