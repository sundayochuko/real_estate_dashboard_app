import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import NumberFormat from "react-number-format";

const PropertiesCard = ({ item, id, setId, setShowModel }) => {
  return (
    <div
      onClick={async () => {
        setId(item.id);
        setShowModel(true);
      }}
      className={
        item.id === id
          ? " flex flex-col md:flex-col lg:flex-row items-start md:items-start lg:items-center justify-start focus:outline-none h-auto md:h-auto lg:h-[180px] w-full bg-white rounded-[12px] pl-0 md:pl-[18px] lg:pl-[18px] py-0 md:py-[18px] lg:py-[18px] mb-4 border-[2.5px] border-prefixblue-dark outline outline-prefixblue-light outline-offset-1 outline-4 "
          : " flex flex-col md:flex-col lg:flex-row items-start md:items-start lg:items-center justify-start focus:outline-none h-auto md:h-auto lg:h-[180px] w-full bg-white rounded-[12px] pl-0 md:pl-[18px] lg:pl-[18px] py-0 md:py-[18px] lg:py-[18px] mb-4 "
      }
    >
      <div
        style={{ backgroundImage: `url(${item.image})` }}
        className=" relative h-[200px] md:h-[150px] lg:h-full w-[100%] md:w-[180px] lg:w-[180px] rounded-[6px] mr-8 bg-cover bg-no-repeat bg-center"
      >
        <button className=" absolute top-2 right-2 focus:outline-none  ">
          {item.like ? (
            <FavoriteOutlinedIcon className=" text-red-500 " />
          ) : (
            <FavoriteBorderOutlinedIcon className=" text-white " />
          )}
        </button>
      </div>
      <div className=" flex flex-col items-start justify-between h-full py-3 pl-[18px] md:pl-0 lg:pl-0 ">
        <div className=" flex flex-col items-start justify-start mb-2 md:mb-5 lg:mb-0 my-0 md:my-4 lg:my-0 ">
          <h1 className=" text-lg font-semibold ">{item.title}</h1>
          <p className=" text-xs text-gray-400 font-medium ml-[-3px] ">
            <i>
              <LocationOnOutlinedIcon fontSize="small" />
            </i>{" "}
            {item.location}
          </p>
        </div>
        <div className=" flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center justify-start ">
          <div className=" flex items-center justify-start text-gray-400 my-2 md:my-0 lg:my-0 mr-5 md:mr-6 lg:mr-10">
            <i>
              <AttachMoneyOutlinedIcon />
            </i>
            <div className=" flex flex-col items-start justify-start pl-2 ">
              <p className=" text-xs  font-medium">Price</p>
              <p className=" text-sm text-gray-500 font-semibold ">
                <NumberFormat
                  value={item.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </p>
            </div>
          </div>
          <div className=" flex items-center justify-start text-gray-400 my-2 md:my-0 lg:my-0 mr-5 md:mr-6 lg:mr-10">
            <i>
              <StorefrontOutlinedIcon />
            </i>
            <div className=" flex flex-col items-start justify-start pl-2 ">
              <p className=" text-xs  font-medium">Owner</p>
              <p className=" text-sm text-gray-500 font-semibold ">
                {item.owner}
              </p>
            </div>
          </div>
          <div className=" flex items-center justify-start text-gray-400 my-2 md:my-0 lg:my-0 mr-5 md:mr-6 lg:mr-10">
            <i>
              <LocalPhoneOutlinedIcon />
            </i>
            <div className=" flex flex-col items-start justify-start pl-2 ">
              <p className=" text-xs  font-medium">Phone</p>
              <p className=" text-sm text-gray-500 font-semibold ">
                {item.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCard;
