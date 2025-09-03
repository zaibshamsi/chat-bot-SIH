import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const TypeBox = ({ onSend }: { onSend: (msg: string) => void }) => {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState([
    "Fee deadline",
    "Scholarship details",
    "About college",
  ]);


   const handleSend = (msg?: string) => {
    const text = msg ?? input;
    if (text.trim() !== "") {
      onSend(text);
      setInput("");
    }
    if (msg) {
      // remove clicked chip only
      setChips((prev) => prev.filter((chip) => chip !== msg));
    }
  };

   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // prevent new line or form submit
      handleSend();
    }
  };


  return (

    <div className="h-35 flex flex-col bg-[#FFFFFF] p-2 pt-5.5 rounded-bl-2xl rounded-br-2xl ">
      {/*Chips section*/}
       <div className="flex items-center justify-center h-[40px] mb-2 ">
        <AnimatePresence>
          {chips.map((chip) => (
            <motion.button
              key={chip}
              onClick={() => handleSend(chip)}
              className="px-3 py-1 m-1 rounded-full bg-gray-200 hover:bg-gray-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {chip}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
      {/* Type box section*/}
    <div className="flex justify-between items-center  p-1 mt-3 bg-[#DEE2E6] w-full rounded-full">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message here..."
        className="flex-1 bg-transparent outline-none px-3"
        onKeyDown={handleKeyDown}
      />
      <button  onClick={() => handleSend("About college")} className="p-2">
        <Image src="/send.svg" alt="send" width={20} height={20} />
      </button>
    </div>
    </div>
  );
};

export default TypeBox;
