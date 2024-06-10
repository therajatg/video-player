import { motion } from "framer-motion";
import { useState } from "react";

export const VideoContextMenu = ({
  contextMenu,
  setContextMenu,
  currentComment,
  setCurrentComment,
  selectedFont,
  addComment,
}) => {
  const { show, x, y } = contextMenu;
  const [showCommentBox, setShowCommentBox] = useState(false);

  return (
    <div className="absolute" style={{ top: `${y}px`, left: `${x}px` }}>
      {showCommentBox ? (
        <motion.div className="flex w-[300px] z-10" drag>
          <textarea
            type="text"
            value={currentComment}
            onChange={(e) => {
              setCurrentComment(e.target.value);
            }}
            placeholder="Add a comment"
            className={`w-full p-2 rounded-md ${selectedFont}`}
          />
          <button onClick={addComment}>Add</button>
        </motion.div>
      ) : (
        <button
          className="absolute z-10"
          onClick={() => setShowCommentBox(true)}
        >
          Comment
        </button>
      )}
    </div>
  );
};
