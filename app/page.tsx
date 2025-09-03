'use client'

// import MessageArea from "@/components/bot";
import VoiceflowWidget from "@/components/VoiceFlowWigdet";
// import Navbar from "@/components/Navbar";
// import TypeBox from "@/components/TypeBox";
import { useState } from "react";

export default function Home() {
   const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);

  const handleSendMessage = (message: string) => {
    if (message.trim() !== "") {
      // Add user message
      setMessages((prev) => [...prev, { sender: "user", text: message }]);

      // Dummy bot response (can be replaced with Dialogflow later)
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "bot", text: "This is a dummy response 🤖" }]);
      }, 800); 
    }
  };

  return (
    <div >
      <div  >
        
        {/* <div>
        <Navbar />
        </div> */}

        {/* <div className="flex-1 overflow-y-auto p-4  scrollbar-hide">
          <MessageArea  />
        </div> */}

        {/* <div className="p-0 border-t rounded-br-2xl rounded-bl-2xl">
          <TypeBox onSend={handleSendMessage} />
        </div> */}
        <div className="h-screen">
        <VoiceflowWidget />
        </div>
      </div>
      
    </div>
  );
}
