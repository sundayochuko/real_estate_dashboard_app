import React, { useState } from "react";
import Searchbar from "../../components/Searchbar";
import Sidebar from "../../components/Sidebar";
import SingleItemModel from "../../components/SingleItemModel";
import { Properties } from "../../DummyData/properties";
import PropertiesCard from "../../components/PropertiesCard";
import Slider from "react-rangeslider";

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
  const [value, setValue] = useState(50000);
  const lowestPrice = 1000;

  const handleChange = (value) => {
    setValue(value);
  };
  const handleClick = async () => {
    const properties = await Properties.filter((item) => {
      return item.price <= value;
    });

    console.log(properties);

    if (properties.length < 1) {
      return null;
    }

    setFilteredProperties(properties);
  };

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
        <div className=" flex flex-row items-center justify-between w-[90%] mt-10 md:mt-12 lg:mt-16 mb-4 md:mb-6 lg:mb-10 ">
          <h1 className=" text-base md:text-2xl lg:text-3xl font-semibold ">
            Search Results
          </h1>
        </div>
        {errors.filteredProperties ? (
          <div className=" h-[75%] md:h-[75%] lg:h-[73%] w-[90%] flex flex-col items-center mt-28 text-center text-xs md:text-sm lg:text-sm">
            <p className=" font-base text-base md:text-lg lg:text-lg mb-2 ">
              {errors.filteredProperties}
            </p>
            <p>- Check your spelling for typing errors</p>
            <p>- Try searching with short and simple keywords</p>
            <p>
              - Try searching more general terms - you can then filter the
              search results
            </p>
          </div>
        ) : (
          <div className=" h-[75%] md:h-[75%] lg:h-[73%] w-[90%] flex flex-col md:flex-col lg:flex-row items-start justify-between ">
            <div className=" h-[150px] w-[200px] md:w-[250px] lg:w-[18%] rounded-[10px] bg-white py-2 md:py-2 lg:py-4 px-3 md:px-3 lg:px-4 mb-4 md:mb-4 lg:mb-0 ">
              <div className=" flex items-center justify-between ">
                <h1 className=" text-sm ">PRICE ($)</h1>
                <button
                  onClick={handleClick}
                  className=" focus:outline-none font-medium text-sm text-prefixblue-dark "
                >
                  APPLY
                </button>
              </div>
              <Slider
                className="  h-2  "
                tooltip={false}
                min={lowestPrice}
                max={50000}
                value={value}
                onChange={handleChange}
              />
              <div className=" flex items-center justify-between ">
                <input
                  value={lowestPrice}
                  readOnly={true}
                  name="from"
                  className=" focus:outline-none h-8 w-[45%] text-sm text-gray-500 rounded-[4px] px-1 bg-transparent border border-gray-400 "
                  type="number"
                />
                -
                <input
                  value={value}
                  name="to"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  className=" focus:outline-none h-8 w-[45%] text-sm text-gray-500 rounded-[4px] px-1 bg-transparent border border-gray-400 "
                  type="number"
                />
              </div>
            </div>
            <div className=" h-full w-full md:w-full lg:w-[80%] overflow-y-scroll scrollbar-hide pb-2 md:pb-2 lg:pb-4 ">
              {filteredProperties.length < 1
                ? Properties.map((item) => {
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
                : filteredProperties.map((item) => {
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
          </div>
        )}
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
