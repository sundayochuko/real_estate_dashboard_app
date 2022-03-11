import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Properties } from "../DummyData/properties";
import { useLocation, useNavigate } from "react-router-dom";
import validate from "../helper/validator";

const Searchbar = ({
  setErrors,
  filteredProperties,
  setFilteredProperties,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();
  const path = useLocation().pathname;

  const handleEnterKeyPress = async (e) => {
    if (e.key === "Enter") {
      const properties = await Properties.filter((item) => {
        return item.title.toLowerCase().includes(e.target.value.toLowerCase());
      });

      setErrors(validate({ properties: properties, searchTerm: searchTerm }));

      setFilteredProperties(properties);
      if (path === "/") {
        navigate("/search");
      }
      setSearchTerm("");
    }
  };

  const handleonChange = async (e) => {
    setSearchTerm(e.target.value);
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
        onChange={handleonChange}
        onKeyPress={handleEnterKeyPress}
        className=" h-full w-full focus:outline-none bg-transparent text-sm md:text-base lg:text-base placeholder:text-xs md:placeholder:text-base lg:placeholder:text-base "
      />
    </div>
  );
};

export default Searchbar;
