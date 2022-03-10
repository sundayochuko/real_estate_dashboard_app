import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState();

  const handleOnChange = (e) => {
    const value = e.target.value;
    console.log(value);
  };

  return (
    <div className=" mt-9 md:mt-8 lg:mt-10 flex items-center justify-start h-[40px] md:h-[50px] lg:h-[80px] w-[90%] bg-white rounded-[8px] md:rounded-[10px] lg:rounded-[12px] pl-4 md:pl-8 lg:pl-10 text-gray-400 shadow-sm ">
      <div className=" mr-4">
        <SearchOutlinedIcon fontSize="medium" />
      </div>
      <input
        name="search"
        type="text"
        placeholder="Search for company, provider, user etc."
        value={searchTerm}
        onChange={() => handleOnChange()}
        className=" h-full w-full focus:outline-none bg-transparent text-sm md:text-base lg:text-base placeholder:text-xs md:placeholder:text-base lg:placeholder:text-base "
      />
    </div>
  );
};

export default Searchbar;
