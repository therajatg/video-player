import React, { useState, useRef, useEffect } from "react";

const VideoPlayerWithComments = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState("");
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef(null);

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
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const getCommentsForCurrentTime = () => {
    return comments
      .filter((comment) => Math.floor(comment.time) === Math.floor(currentTime))
      .map((comment, index) => (
        <p
          key={index}
          className="bg-neutral-700 p-[10px] rounded-[5px] my-[5px]"
        >
          {comment.text}
        </p>
      ));
  };

  return (
    <div className="mt-8 w-full flex flex-col items-center">
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
        className="my-8"
      />
      {videoUrl && (
        <div className="w-full flex flex-col items-center gap-y-8">
          <video
            ref={videoRef}
            controls
            width="600"
            src={videoUrl}
            onTimeUpdate={handleTimeUpdate}
          />
          <div className="w-[600px] flex">
            <textarea
              type="text"
              value={currentComment}
              onChange={(e) => setCurrentComment(e.target.value)}
              placeholder="Add a comment"
              className="w-full p-2 rounded-md"
            />
            <button onClick={addComment}>Add Comment</button>
          </div>
          <div className="mt-[20px] text-left w-[600px] mx-auto">
            <h3>Comments:</h3>
            {getCommentsForCurrentTime()}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayerWithComments;
