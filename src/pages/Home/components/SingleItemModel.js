import React, { useEffect, useState, Component } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Properties } from "../../../DummyData/properties";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { googleMapApi } from "../../../config/config";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";

const SingleItemModel = ({ showModel, setShowModel, id, setId }) => {
  const [property, setProperty] = useState({});

  useEffect(() => {
    if (id) {
      const [property] = Properties.filter((item) => {
        return item.id === id;
      });
      return setProperty(property);
    }
  }, [id]);

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const config = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    <>
      {showModel ? (
        <div className="z-10 absolute h-full w-full ">
          <div
            onClick={() => {
              setId("");
              setProperty({});
              setShowModel(!showModel);
            }}
            className="z-10 absolute h-full w-full bg-black bg-opacity-5 "
          ></div>
          <div className=" z-20 absolute right-0 h-full w-[30%] bg-white shadow-xl px-12">
            <button
              onClick={() => {
                setId("");
                setProperty({});
                setShowModel(!showModel);
              }}
              className=" focus:outline-none absolute top-6 right-6 flex items-center justify-center h-[30px] w-[30px] text-gray-300 bg-transparent border border-gray-300 rounded-md "
            >
              <CloseOutlinedIcon />
            </button>
            <div className=" w-full flex flex-col items-start justify-start mt-20  ">
              <h1 className=" text-black text-3xl font-medium mb-1 ">
                {property.title}
              </h1>
              <p className=" text-sm text-gray-400 ml-[-3px] ">
                <i>
                  <LocationOnOutlinedIcon fontSize="small" />
                </i>
                {property.location}
              </p>
            </div>
            <div className=" border-b w-full my-[35px] "></div>
            <p className=" flex items-center  font-semibold mb-8 ">
              <i>
                <div
                  style={{ backgroundImage: `url(${property.ownerAvatar})` }}
                  className=" h-[45px] w-[45px] rounded-full bg-gray-300 bg-center bg-no-repeat bg-cover mr-2 "
                ></div>
              </i>
              <div className=" flex flex-col items-start text-sm ">
                {property.owner}
              </div>
            </p>
            <div
              style={{ backgroundImage: `url(${property.image})` }}
              className="relative h-[200px] w-full rounded-[10px] bg-gray-300 bg-center bg-no-repeat bg-cover "
            >
              <button
                onClick={async () => {
                  if (property.like === true) {
                    property["like"] = false;
                    return setShowModel(false);
                  }
                  property["like"] = true;
                  setShowModel(false);
                }}
                className=" absolute top-2 right-2 focus:outline-none  "
              >
                {property.like ? (
                  <FavoriteOutlinedIcon className=" text-red-500 " />
                ) : (
                  <FavoriteBorderOutlinedIcon className=" text-white " />
                )}
              </button>
            </div>
            <p className=" text-2xl font-semibold my-4 ">{property.price}</p>
            <p className=" text-sm text-medium text-prefixGray-dark ">
              {property.description}
            </p>
            <button className=" focus:outline-none text-sm text-white bg-prefixblue-dark  py-2.5 px-4 my-8 rounded-xl ">
              Contact Owner
            </button>
            <div className=" h-[180px] w-full bg-gray-300 ">
              <GoogleMapReact
                bootstrapURLKeys={{ key: googleMapApi }}
                defaultCenter={config.center}
                defaultZoom={config.zoom}
              >
                <LocationOnIcon
                  className="text-red-500"
                  fontSize="large"
                  lat={config.center.lat}
                  lng={config.center.lng}
                />
              </GoogleMapReact>
            </div>
            <div className=" absolute bottom-0 w-[80%] flex items-center justify-between py-6 border-t border-prefixGray-dark ">
              <div className=" flex items-center ">
                <div className=" flex items-center justify-center h-[40px] w-[40px] rounded-full bg-prefixblue-dark bg-opacity-20 text-prefixblue-dark mr-2 ">
                  <RocketLaunchOutlinedIcon fontSize="small" />
                </div>
                <div className=" flex flex-col items-start ">
                  <h1 className=" font-semibold text-base text-black leading-5 ">
                    Free plan
                  </h1>
                  <p className=" text-xs text-gray-400 ">$50 billed monthly</p>
                </div>
              </div>
              <button className=" focus:outline-none h-[40px] w-[130px] text-sm text-white rounded-xl bg-prefixblue-dark ">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SingleItemModel;
