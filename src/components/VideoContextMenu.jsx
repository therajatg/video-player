// import { useClickAway } from "@uidotdev/usehooks";
// import { motion } from "framer-motion";
// import { useState } from "react";

// export const VideoContextMenu = ({
//   contextMenu,
//   setContextMenu,
//   currentComment,
//   setCurrentComment,
//   selectedFont,
//   addComment,
// }) => {
//   const { show, x, y } = contextMenu;

//   const [showCommentBox, setShowCommentBox] = useState(false);
//   const ref = useClickAway(() => {
//     setContextMenu((prev) => {
//       return { ...prev, show: false };
//     });
//   });

//   return (
//     contextMenu.show && (
//       <div
//         className="absolute"
//         style={{ top: `${y}px`, left: `${x}px` }}
//         ref={ref}
//       >
//         {showCommentBox ? (
//           <motion.textarea
//             drag
//             type="text"
//             value={currentComment}
//             onChange={(e) => {
//               setCurrentComment(e.target.value);
//             }}
//             placeholder="Add a comment"
//             className={`bg-transparent border-0 focus:border-none ${selectedFont}`}
//           />
//         ) : (
//           /* <button onClick={addComment}>Add</button> */

//           <button
//             className="absolute z-10"
//             onClick={() => setShowCommentBox(true)}
//           >
//             Comment
//           </button>
//         )}
//       </div>
//     )
//   );
// };
