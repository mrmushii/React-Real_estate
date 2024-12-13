import React from "react";

const Card = ({ data }) => {
  return (
    <div className="mx-16">
      <div className="flex gap-8 justify mt-16">
        {data.map((item) => (
          <div>
            <img src={item.img} alt="" srcset="" className="rounded-lg" />
            <div className="justify-center flex flex-col items-center mt-10 text-fg text-3xl">
              <hr className="border-fg border px-64 mb-9" />
              <h1>{item.name}</h1>
              <p>{item.address}</p>
              <p>{item.description_1}</p>
              <p>{item.description_2}</p>
              <hr className="border-fg border px-64 mt-9" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
