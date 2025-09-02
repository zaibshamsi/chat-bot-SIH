'use client'

import MessageArea from "@/components/msgarea";
import Navbar from "@/components/Navbar";
import TypeBox from "@/components/TypeBox";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = (message: string) => {
    if (message.trim() !== "") {
      setMessages((prev) => [...prev, message]);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-[#F8F9FA] w-80 h-[600px] flex flex-col rounded-2xl border border-black">
        
        <div>
        <Navbar />
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-[#F8F9FA] scrollbar-hide">
          <MessageArea messages={messages} />
        </div>

        <div className="p-0 border-t rounded-br-2xl rounded-bl-2xl">
          <TypeBox onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}
