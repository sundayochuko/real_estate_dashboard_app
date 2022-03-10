import React from "react";
import Sidebar from "../../components/Sidebar";

const Index = () => {
  return (
    <div className=" flex flex-row h-screen w-full bg-prefixGray-light ">
      <Sidebar />
      <div className=" h-full w-[85%] md:w-[74%] lg:w-[84.4%] flex flex-col items-center justify-center bg-transparent ">
        <h1 className=" text-2xl font-semibold text-black ">Comming Soon...</h1>
      </div>
    </div>
  );
};

export default Index;
