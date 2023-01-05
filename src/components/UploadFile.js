import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormData from "form-data";
import axios from "axios";
import spinner from "../images/spinner.gif";

const UploadFile = ({ setImageName }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    setIsLoading(true);
    setImageName(e.target.files[0].name);
    const formData = new FormData();
    formData.append("photo", e.target.files[0]);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("https://pleasant-lamb-uniform.cyclic.app/photo", formData, config)
      .then((res) => {
        console.log("successfully uploaded");
        setIsLoading(false);
        navigate("/background");
      });
    // setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <img className="w-[100px] h-[100px]" src={spinner} alt="spinner.gif" />
      </div>
    );
  }
  return (
    <div className="uploadfile">
      <div className="p-5">
        <h1 className="sm:text-2xl md:text-5xl font-bold">
          Upload an image to remove <br />
          the background
        </h1>
      </div>
      <div>
        <img
          className="w-full text-center"
          src="./remove-background.jpg"
          alt="remove-background.jpg"
        />
      </div>
      <div className="text-center p-10">
        <form className="w-full relative">
          <input
            onChange={handleImageUpload}
            className="w-full h-full invisible absolute"
            type="file"
            name="image"
            id="image"
          />
          <label
            htmlFor="image"
            type="submit"
            className="uppercase bg-blue-600 text-gray-100  px-6 py-3"
          >
            Upload an Image
          </label>
        </form>
      </div>
    </div>
  );
};

export default UploadFile;
