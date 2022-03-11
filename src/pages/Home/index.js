import React from "react";
import Searchbar from "../../components/Searchbar";
import Sidebar from "../../components/Sidebar";
import { Properties } from "../../DummyData/properties";
import SingleItemModel from "../../components/SingleItemModel";
import PropertiesCard from "../../components/PropertiesCard";

const Home = ({
  id,
  setId,
  errors,
  setErrors,
  showModel,
  setShowModel,
  filteredProperties,
  setFilteredProperties,
}) => {
  return (
    <div className="  flex flex-row h-screen w-full bg-prefixGray-light ">
      <Sidebar showModel={showModel} setShowModel={setShowModel} />
      <div className="relative h-full w-[85%] md:w-[74%] lg:w-[84.4%] flex flex-col items-center justify-start bg-transparent ">
        <Searchbar
          errors={errors}
          setErrors={setErrors}
          filteredProperties={filteredProperties}
          setFilteredProperties={setFilteredProperties}
        />
        <div className=" flex flex-row items-center justify-between w-[90%] my-10 md:my-12 lg:my-16 ">
          <h1 className=" text-base md:text-2xl lg:text-3xl font-semibold ">
            Listings
          </h1>
          <div className=" flex items-center justify-between h-[36px] md:h-[36px] lg:h-[42px] w-[160px] md:w-[200px] lg:w-[240px] bg-transparent rounded-[10px] md:rounded-[10px] lg:rounded-[14px] border border-gray-300 ">
            <button className=" flex items-center justify-center h-full w-[50%]  focus:outline-none bg-white rounded-[10px] md:rounded-[10px] lg:rounded-[14px] text-xs md:text-sm lg:text-sm text-black ">
              Active
            </button>
            <button className=" flex items-center justify-center h-full w-[50%]  focus:outline-none rounded-[10px] md:rounded-[10px] lg:rounded-[14px] text-xs md:text-sm lg:text-sm text-black ">
              Inactive
            </button>
          </div>
        </div>
        <div className=" h-[71%] w-[90%] overflow-y-scroll scrollbar-hide py-4 ">
          {Properties.map((item) => {
            return (
              <div key={item.id}>
                <PropertiesCard
                  item={item}
                  setId={setId}
                  setShowModel={setShowModel}
                />
              </div>
            );
          })}
        </div>
        <SingleItemModel
          showModel={showModel}
          setShowModel={setShowModel}
          id={id}
          setId={setId}
        />
      </div>
    </div>
  );
};

export default Home;
