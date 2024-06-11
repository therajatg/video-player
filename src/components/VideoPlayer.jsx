import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export const VideoPlayer = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const videoRef = useRef(null);
  const textAreaRef = useRef(null);

  const [selectedFont, setSelectedFont] = useState({
    family: "font-BebasNeueRegular",
    color: "text-black",
    size: "text-base",
  });

  const [clickLocation, setClickLocation] = useState(null);
  const [isVideoClicked, setIsVideoClicked] = useState(false);
  const [text, setText] = useState("");

  const fontFamilies = [
    { name: "BebasNeue-Regular", value: "font-BebasNeueRegular" },
    { name: "Danfo-Regular", value: "font-DanfoRegular" },
    { name: "DMSerifText-Italic", value: "font-DMSerifTextItalic" },
    { name: "DMSerifText-Regular", value: "font-DMSerifTextRegular" },
    { name: "Gwendolyn-Bold", value: "font-GwendolynBold" },
    { name: "Gwendolyn-Regular", value: "font-GwendolynRegular" },
    { name: "Jacquard12-Regular", value: "font-Jacquard12Regular" },
    { name: "JosefinSans-Bold", value: "font-JosefinSansBold" },
  ];

  const fontColors = [
    { name: "Black", value: "text-black" },
    { name: "White", value: "text-white" },
    { name: "Red", value: "text-red-500" },
    { name: "Blue", value: "text-blue-500" },
    { name: "Green", value: "text-green-500" },
    { name: "Yellow", value: "text-yellow-500" },
    { name: "Purple", value: "text-purple-500" },
    { name: "Orange", value: "text-orange-500" },
  ];

  const fontSizes = [
    { name: "12px", value: "text-xs" },
    { name: "14px", value: "text-sm" },
    { name: "16px", value: "text-base" },
    { name: "18px", value: "text-lg" },
    { name: "20px", value: "text-xl" },
    { name: "24px", value: "text-2xl" },
    { name: "30px", value: "text-3xl" },
    { name: "36px", value: "text-4xl" },
    { name: "48px", value: "text-5xl" },
    { name: "60px", value: "text-6xl" },
  ];

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoUrl(URL.createObjectURL(file));
    }
  };

  const handleVideoClick = (e) => {
    e.preventDefault();
    const { pageX, pageY } = e;
    console.log(e);
    setClickLocation({ x: pageX, y: pageY });
    setIsVideoClicked(true);
  };

  const handleSelectedFont = (e) => {
    const { name, value } = e.target;
    setSelectedFont({ ...selectedFont, [name]: value });
    textAreaRef.current.style.height = `${scrollHeight}px`;
  };

  const handleChange = (event) => {
    const { scrollHeight } = textAreaRef.current;
    textAreaRef.current.style.height = `${scrollHeight}px`;
    setText(event.target.value);
  };

  return (
    <div className="mt-8 w-full flex flex-col items-center">
      <div className="w-[600px] flex flex-col justify-center items-center">
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          className="my-8"
        />
        <div className="w-full flex justify-between mb-12">
          <div className="flex flex-col">
            <label htmlFor="family" className="font-semibold text-lg">
              Font Family:
            </label>
            <select
              name="family"
              id="family"
              className="p-2 rounded-md"
              onChange={handleSelectedFont}
            >
              {fontFamilies.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="color" className="font-semibold text-lg">
              Font Color:
            </label>
            <select
              name="color"
              id="color"
              className="p-2 rounded-md"
              onChange={handleSelectedFont}
            >
              {fontColors.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="fonts" className="font-semibold text-lg">
              Font Size:
            </label>
            <select
              name="size"
              id="size"
              className="p-2 rounded-md"
              onChange={handleSelectedFont}
            >
              {fontSizes.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {videoUrl && (
        <div className="w-full flex flex-col items-center gap-y-8">
          <video
            ref={videoRef}
            controls
            width="600"
            src={videoUrl}
            // onTimeUpdate={handleTimeUpdate}
            className="-z-1"
            onClick={handleVideoClick}
            // onContextMenu={handleContextMenu}
          />
          {isVideoClicked && (
            <motion.textarea
              className={`absolute bg-transparent ${selectedFont.color} ${selectedFont.family} ${selectedFont.size} w-auto`}
              style={{
                top: `${clickLocation.y}px`,
                left: `${clickLocation.x}px`,
              }}
              ref={textAreaRef}
              value={text}
              onChange={handleChange}
            />
          )}
        </div>
      )}
    </div>
  );
};
