// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// // --- Type Definitions for Component Props ---
// interface TypeBoxProps {
//   onSend: (msg: string) => void;
//   isLoading: boolean; // Added to disable the form during API calls
// }

// const TypeBox: React.FC<TypeBoxProps> = ({ onSend, isLoading }) => {
//   const [input, setInput] = useState("");
//   const [chips, setChips] = useState([
//     "Fee deadline",
//     "Scholarship details",
//     "About college",
//   ]);

//   const handleSend = (msg?: string) => {
//     // Don't send if loading
//     if (isLoading) return;
    
//     const text = msg ?? input;
//     if (text.trim() !== "") {
//       onSend(text);
//       setInput("");
//     }
//     // Remove the clicked chip from the list
//     if (msg) {
//       setChips((prev) => prev.filter((chip) => chip !== msg));
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault(); // prevent new line
//       handleSend();
//     }
//   };

//   return (
//     <div className="h-35 flex flex-col bg-[#FFFFFF] p-2 pt-5.5 rounded-bl-2xl rounded-br-2xl border-t border-gray-200">
//       {/* Chips section */}
//       <div className="flex items-center justify-center h-[40px] mb-2 flex-wrap gap-1">
//         <AnimatePresence>
//           {chips.map((chip) => (
//             <motion.button
//               key={chip}
//               onClick={() => handleSend(chip)}
//               className="px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.3 }}
//               disabled={isLoading} // Disable when loading
//             >
//               {chip}
//             </motion.button>
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* Type box section */}
//       <div className="flex justify-between items-center p-1 mt-3 bg-[#DEE2E6] w-full rounded-full">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type your message here..."
//           className="flex-1 bg-transparent outline-none px-3 disabled:opacity-50"
//           onKeyDown={handleKeyDown}
//           disabled={isLoading} // Disable when loading
//         />
//         <button
//           onClick={() => handleSend()} // Corrected: Sends the input value
//           className="p-2 disabled:opacity-50 disabled:cursor-not-allowed text-blue-600"
//           disabled={isLoading} // Disable when loading
//         >
//           {/* Replaced next/image with an inline SVG for compatibility */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <line x1="22" y1="2" x2="11" y2="13"></line>
//             <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TypeBox;

