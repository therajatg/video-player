import React, { useState, useRef } from "react";
import { VideoContextMenu } from "./VideoContextMenu";
import { motion } from "framer-motion";

const VideoPlayerWithComments = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState("");
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef(null);

  const [selectedFont, setSelectedFont] = useState("BebasNeue-Regular");
  const [contextMenu, setContextMenu] = useState({ show: false });

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

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideoUrl(URL.createObjectURL(file));
    }
  };

  const addComment = () => {
    setComments([...comments, { time: currentTime, text: currentComment }]);
    setCurrentComment("");
    setContextMenu((prev) => {
      return { ...prev, show: false };
    });
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const getCommentsForCurrentTime = () => {
    return comments
      .filter((comment) => {
        if (Math.floor(comment.time) === Math.floor(currentTime)) {
          console.log(comment);
          return true;
        } else {
          return false;
        }
      })
      .map((comment, index) => (
        <p
          key={index}
          className={`bg-neutral-700 p-[10px] rounded-[5px] my-[5px] ${selectedFont}`}
        >
          {comment.text}
        </p>
      ));
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
    const { pageX, pageY } = event;
    setContextMenu({
      show: true,
      x: pageX,
      y: pageY,
    });
  };

  return (
    <div className="mt-8 w-full flex flex-col items-center">
      <div className="flex justify-between items-center">
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          className="my-8"
        />
        <div>
          <label for="fonts" className="mr-4 font-bold text-xl">
            Select Font:
          </label>
          <select
            name="fonts"
            id="fonts"
            className="p-2 rounded-md"
            onChange={(e) => {
              setSelectedFont(e.target.value);
            }}
          >
            {fontFamilies.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {videoUrl && (
        <div className="w-full flex flex-col items-center gap-y-8">
          <video
            ref={videoRef}
            controls
            width="600"
            src={videoUrl}
            onTimeUpdate={handleTimeUpdate}
            className="-z-1"
            onContextMenu={handleContextMenu}
          />
          {contextMenu.show && (
            <VideoContextMenu
              contextMenu={contextMenu}
              setContextMenu={setContextMenu}
              currentComment={currentComment}
              setCurrentComment={setCurrentComment}
              selectedFont={selectedFont}
              addComment={addComment}
              comments={comments}
            />
          )}

          <motion.div
            drag
            className="w-[300px] absolute"
            style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
          >
            {getCommentsForCurrentTime()}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayerWithComments;
