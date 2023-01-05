import React, { useEffect, useState } from "react";
import spinner from "../images/spinner.gif";

const NoBackground = ({ imageName }) => {
  const [imageWithNoBackground, setImageWithNoBackground] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `http://localhost:5000/images/${imageName ? imageName : undefined}`
    ).then((res) => {
      setOriginalImage(res.url);
      fetch(
        `http://localhost:5000/images/${imageName?.split(".")[0] + ".png"}`
      ).then((res) => {
        setImageWithNoBackground(res.url);
        setIsLoading(false);
      });
    });
    // setIsLoading(false);
  }, [imageName]);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <img className="w-[100px] h-[100px]" src={spinner} alt="spinner.gif" />
      </div>
    );
  }
  console.log(imageWithNoBackground);
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <div className="flex justify-center items-center gap-10 flex-wrap-reverse">
        <div>
          <h3 className="text-center font-bold text-base text-gray-500 mb-5">
            Original Image
          </h3>
          <div className="min-h-[300px] max-h-[400px] h-[300px] overflow-hidden">
            <img
              className="w-full h-full object-center object-contain rounded-xl"
              src={originalImage}
              alt="original_image"
            />
          </div>
        </div>
        <div>
          <h3 className="text-center font-bold text-base text-gray-500 mb-5">
            Background Changed
          </h3>
          <div className="min-h-[300px] max-h-[400px] h-[300px] overflow-hidden">
            <img
              src={imageWithNoBackground}
              className="w-full h-full object-center object-contain rounded-xl bg-gray-300"
              alt="israfil.jpg"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center p-5">
        <a
          className="bg-purple-500 px-5 py-3 block"
          download={imageName.split(".")[0] + ".png"}
          href={`http://localhost:5000/images/${
            imageName.split(".")[0] + ".png"
          }`}
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default NoBackground;
