import React from "react";
import Card from "./Card";
import New_Card from "./New_Card";

const Properties = () => {
  const data = [
    {
      id: "1",
      img: "/public/one.jpg",
      name: "Rowhouse",
      address: "123 Anywhere St. Any City",
      description_1: "2 Beds | 1 Bath | 1 Car",
      description_2: "Wheelchair accessible listing",
    },
    {
      id: "2",
      img: "/public/two.jpg",
      name: "Condo",
      address: "123 Anywhere St. Any City",
      description_1: "1 Beds | 2 Bath | 1 Car",
      description_2: "",
    },
    {
      id: "3",
      img: "/public/three.jpg",
      name: "Single-family home",
      address: "123 Anywhere St. Any City",
      description_1: "2 Beds | 3 Bath | 2 Car",
      description_2: "Wheelchair accessible listing",
    },
  ];

  const new_data = [
    {
      id: "1",
      img: "/public/four.png",
      name: "Single-family home",
      address: "123 Anywhere St. Any City",
      description_1: "2 Beds | 3 Bath | 2 Car",
      description_2: "Wheelchair accessible listing",
    },
    {
      id: "2",
      img: "/public/five.png",
      name: "Single-family home",
      address: "123 Anywhere St. Any City",
      description_1: "2 Beds | 3 Bath | 2 Car",
      description_2: "Wheelchair accessible listing",
    },
    {
      id: "3",
      img: "/public/six.png",
      name: "Single-family home",
      address: "123 Anywhere St. Any City",
      description_1: "2 Beds | 3 Bath | 2 Car",
      description_2: "Wheelchair accessible listing",
    },
  ];

  return (
    <>
      <div className="bg-back pt-20 pb-20">
        <center className="text-fg text-6xl">Properties for sale</center>
        <Card data={data} />
      </div>
      <div className="bg-back_1 pt-20 pb-20 justify-center flex flex-col items-center">
        <center className="text-fg text-6xl">Properties for rent</center>
        <New_Card new_data={new_data} />
      </div>
    </>
  );
};

export default Properties;
