// import React, { MouseEventHandler, useState } from "react";

// export default function MovableDiv() {
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseDown = (event) => {
//     setIsDragging(true);
//     setDragStart({ x: event.clientX, y: event.clientY });
//   };

//   const handleMouseMove = (event) => {
//     if (!isDragging) return;
//     setPosition({
//       x: position.x + event.clientX - dragStart.x,
//       y: position.y + event.clientY - dragStart.y,
//     });
//     setDragStart({ x: event.clientX, y: event.clientY });
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   return (
//     <div
//       style={{
//         position: "absolute",
//         top: position.y,
//         left: position.x,
//         width: 100,
//         height: 100,
//         backgroundColor: "blue",
//       }}
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//     />
//   );
// }