import React from "react";
import { Button } from "./components/Button";
import Btn from "./components/Btn";
import Nav from "./components/Nav";
const App = () => {
  return (
    <div className="flex h-screen bg-back ">
      <div className="p-24  w-1/2">
        <Nav />

        <h1 className="text-9xl py-5 my-6 mt-16 text-fg ">
          Let us help <br />
          you find your <br />
          dream home. <br />
        </h1>
        <div className="flex gap-x-32 py-6 my-4 ">
          <Button />
          <Btn />
        </div>
      </div>
      <div className=" w-1/2 ">
        <img className="  h-screen " src="/public/hero.jpg" />
      </div>
    </div>
  );
};

export default App;
