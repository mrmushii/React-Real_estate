import React from "react";

const Testimonial = () => {
  let testi = [
    {
      note: "Boost your product and service's credibility by adding     testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable",
      name: "- Natalia lowe",
    },
    {
      note: "Boost your product and service's credibility by adding     testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.Boost your product and service's credibility by adding testimonials from your clients.",
      name: "- Elliot Sterling",
    },
    {
      note: "Boost your product and service's credibility by adding     testimonials from your clients.",
      name: "- Liliam Prat",
    },
  ];

  return (
    <div className=" bg-back h-screen ">
      <img
        src="/public/building.jpg"
        alt=""
        className="bg-cover w-screen h-screen opacity-15 absolute"
      />
      <div className="font-semibold">
        <h1 className="text-fg text-6xl p-10 pt-20 ms-32">Happy Clients</h1>
        <div className="flex gap-32 m-12 mt-28 mx-44">
          {testi.map((item) => (
            <div className="text-fg text-xl w-1/3">
              <p className="text-6xl">"</p>
              <hr className="border-fg mb-6 w-full" />
              <p className="mt-7">{item.note}</p>

              <p className="mt-10">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
