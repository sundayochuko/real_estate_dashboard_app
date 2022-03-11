import React from "react";
import Searchbar from "../../components/Searchbar";
import Sidebar from "../../components/Sidebar";
import SingleItemModel from "../../components/SingleItemModel";
import { Properties } from "../../DummyData/properties";
import PropertiesCard from "../../components/PropertiesCard";

const Index = ({
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
            Search Results
          </h1>
        </div>
        <div className=" h-[71%] w-[90%] overflow-y-scroll scrollbar-hide py-2 md:py-4 lg:py-4 ">
          {errors.filteredProperties ? (
            <div className=" h-full w-full flex flex-col items-center mt-28 text-center text-xs md:text-sm lg:text-sm">
              <p className=" font-base text-base md:text-lg lg:text-lg mb-2 ">
                {" "}
                {errors.filteredProperties}{" "}
              </p>
              <p>- Check your spelling for typing errors</p>
              <p>- Try searching with short and simple keywords</p>
              <p>
                - Try searching more general terms - you can then filter the
                search results
              </p>
            </div>
          ) : filteredProperties.length < 1 ? (
            Properties.map((item) => {
              return (
                <div key={item.id}>
                  <PropertiesCard
                    item={item}
                    setId={setId}
                    setShowModel={setShowModel}
                  />
                </div>
              );
            })
          ) : (
            filteredProperties.map((item) => {
              return (
                <div key={item.id}>
                  <PropertiesCard
                    item={item}
                    setId={setId}
                    setShowModel={setShowModel}
                  />
                </div>
              );
            })
          )}
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

export default Index;
