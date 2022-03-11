import React, { useState, useEffect } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import validate from "../helper/validator";
import { Link } from "react-router-dom";
import { User } from "../DummyData/user";

const Login = ({ isLogedIn, setIsLogedIn }) => {
  const [values, setvalues] = useState({
    userName: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [ShowPassword, setShowPassword] = useState(false);

  const user = localStorage.getItem("user");

  useEffect(() => {
    if (user) {
      setIsLogedIn(!isLogedIn);
      return;
    }
    return null;
  }, [isLogedIn, setIsLogedIn, user]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setErrors(validate(values));
    if (values.userName.length === 0 || values.password.length === 0) {
      return null;
    }

    if (
      values.userName.toLowerCase() !== User.userName.toLowerCase() ||
      values.password.toLowerCase() !== User.password.toLowerCase()
    ) {
      return null;
    }

    await localStorage.setItem("user", JSON.stringify(values));
    setIsLogedIn(!isLogedIn);
  };

  const ToggleShowPassword = () => {
    setShowPassword(!ShowPassword);
  };

  return (
    <div className=" z-20 absolute top-0 flex flex-col items-center justify-center h-screen w-full bg-black bg-opacity-50 backdrop-blur-sm ">
      <Link
        to="/"
        className=" h-[60px] w-[60px] rounded-lg bg-prefixblue-dark flex items-center justify-center mb-5 md:mb-8 lg:mb-12 "
      >
        <p className=" text-white text-3xl font-bold ">Z</p>
      </Link>
      <div className=" flex flex-col items-center pt-4 pb-8 bg-white shadow-lg rounded">
        <h1 className=" text-black text-2xl md:text-3xl font-bold mb-2">
          Login
        </h1>
        <div className="border-b border-gray w-full my-2"></div>
        <div className="flex flex-col px-6 md:px-8 mt-2">
          <div className="text-sm text-prefixGborder-gray-300 mb-2">
            <label htmlFor="userName ">Username</label>
          </div>
          <input
            onChange={handleInput}
            type="text"
            name="userName"
            value={values.userName}
            placeholder="Enter Username "
            className="focus: outline-none bg-transparent border border-gray-300 rounded px-4 mb-1 h-10 md:h-12 w-72 md:w-96"
          />
          {errors.userName && (
            <p className="text-red-500 text-sm ">{errors.userName}</p>
          )}
        </div>
        <div className="flex flex-col px-4 md:px-8 mt-8">
          <div className="flex justify-between text-sm text-prefixGborder-gray-300 mb-2">
            <label htmlFor="password">Password</label>
            <Link to="/" className="text-red-500 underline">
              Forget Password?
            </Link>
          </div>
          <div className="flex items-center justify-between px-4 focus: outline-none bg-transparent border border-gray-300 rounded pl-4 mb-1  h-10 md:h-12 w-72 md:w-96">
            <input
              onChange={handleInput}
              onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
              type={ShowPassword === false ? "password" : "text"}
              name="password"
              value={values.password}
              placeholder="Enter Password"
              className="focus:outline-none w-80"
            />
            <button
              className="focus:outline-none"
              onClick={() => {
                ToggleShowPassword();
              }}
            >
              {ShowPassword === false ? (
                <VisibilityOffIcon className="text-prefixGborder-gray-300" />
              ) : (
                <VisibilityIcon className="text-prefixGborder-gray-300" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm ">{errors.password}</p>
          )}
        </div>
        <button
          onClick={handleSubmit}
          className="h-10 px-32 my-8 focus:outline-none bg-prefixblue-dark hover:bg-primary-light text-white rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
