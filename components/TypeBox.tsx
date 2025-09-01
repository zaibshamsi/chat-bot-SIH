import React, { useState } from "react";
import Image from "next/image";

const TypeBox = ({ onSend }: { onSend: (msg: string) => void }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      onSend(input);      // Send message to parent
      setInput("");       // Clear input field
    }
  };
   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // prevent new line or form submit
      handleSend();
    }
  };

  return (
    <div className="h-25 flex items-baseline-last">

    <div className="flex justify-between items-center p-2 bg-[#DEE2E6] w-full rounded-full">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message here..."
        className="flex-1 bg-transparent outline-none px-3"
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSend}  className="p-2">
        <Image src="/send.svg" alt="send" width={20} height={20} />
      </button>
    </div>
    </div>
  );
};

export default TypeBox;
