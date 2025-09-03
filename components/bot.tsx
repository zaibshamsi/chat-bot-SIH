// import React, { useState, useEffect, useRef } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// // --- Configuration ---
// // Paste your Dialog Manager API key here. It should start with "VF.DM."
// const API_KEY = 'VF.DM.68b87af2d255357adc1f9c2b.umKRSQwtmva4Euvb';

// // --- Type Definitions ---
// // Defining the structure of a chat message for type safety
// interface ChatMessage {
//   sender: 'user' | 'bot';
//   text: string;
// }

// // Defining the props for the TypeBox component
// interface TypeBoxProps {
//   onSend: (message: string) => void;
//   isLoading: boolean;
// }

// // --- Main App Component ---
// const App: React.FC = () => {
//   const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [userId, setUserId] = useState<string | null>(null);
//   const chatEndRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     setUserId('session-' + Math.random().toString(36).substring(2, 9));
//     setChatHistory([{ sender: 'bot', text: 'Hi! Ask me anything about the college.' }]);
//   }, []);

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [chatHistory]);

//   const handleSend = async (message: string) => {
//     if (!message.trim() || isLoading || !userId) return;

//     const userMessage: ChatMessage = { sender: 'user', text: message };
//     setChatHistory(prev => [...prev, userMessage]);
//     setIsLoading(true);

//     try {
//       const fullApiUrl = `https://general-runtime.voiceflow.com/state/user/${userId}/interact`;
//       const requestBody = {
//         action: {
//           type: "text",
//           payload: message,
//         }
//       };
      
//       const response = await fetch(fullApiUrl, {
//         method: "POST",
//         headers: {
//           'Authorization': API_KEY,
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(requestBody)
//       });

//       const postRes = await response.json();
      
//       const botResponses: ChatMessage[] = [];
//       for (const trace of postRes) {
//         if (trace.type === "speak" || trace.type === "text") {
//           botResponses.push({ sender: 'bot', text: trace.payload.message });
//         }
//       }
      
//       if (botResponses.length > 0) {
//         setChatHistory(prev => [...prev, ...botResponses]);
//       }

//     } catch (error) {
//       console.error("Error interacting with Voiceflow:", error);
//       setChatHistory(prev => [...prev, { sender: 'bot', text: "Sorry, something went wrong on my end." }]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="chat-app-container">
//       <div className="chat-header">
//         <h2>College AI Assistant</h2>
//       </div>
//       <div className="chat-history">
//         {chatHistory.map((chat, index) => (
//           <div key={index} className={`chat-message ${chat.sender}`}>
//             <p>{chat.text}</p>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="chat-message bot">
//              <div className="typing-indicator">
//                 <span></span><span></span><span></span>
//               </div>
//           </div>
//         )}
//         <div ref={chatEndRef} />
//       </div>
//       <TypeBox onSend={handleSend} isLoading={isLoading} />
//     </div>
//   );
// };

// // --- TypeBox Component ---
// const TypeBox: React.FC<TypeBoxProps> = ({ onSend, isLoading }) => {
//   const [input, setInput] = useState<string>("");
//   const [chips, setChips] = useState<string[]>([
//     "Fee deadline",
//     "Scholarship details",
//     "About college",
//   ]);

//   const handleSendClick = (msg?: string) => {
//     const textToSend = msg || input;
//     if (textToSend.trim() !== "" && !isLoading) {
//       onSend(textToSend);
//       setInput("");
//       if (msg) {
//         setChips((prev) => prev.filter((chip) => chip !== msg));
//       }
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       handleSendClick();
//     }
//   };

//   return (
//     <div className="typebox-container">
//       <div className="chips-section">
//         <AnimatePresence>
//           {chips.map((chip) => (
//             <motion.button
//               key={chip}
//               onClick={() => handleSendClick(chip)}
//               className="chip-button"
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.2 }}
//               disabled={isLoading}
//             >
//               {chip}
//             </motion.button>
//           ))}
//         </AnimatePresence>
//       </div>
//       <div className="input-section">
//         <input
//           type="text"
//           value={input}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
//           placeholder="Type your message here..."
//           className="flex-1 bg-transparent outline-none px-3"
//           onKeyDown={handleKeyDown}
//           disabled={isLoading}
//         />
//         <button onClick={() => handleSendClick()} className="p-2" disabled={isLoading}>
//            <svg className="send-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/></svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// // --- Styling ---
// const Style: React.FC = () => (
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
//     body { background-color: #f0f2f5; font-family: 'Inter', sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
//     .chat-app-container { width: 100%; max-width: 500px; height: 90vh; max-height: 800px; background-color: #ffffff; border-radius: 16px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1); display: flex; flex-direction: column; overflow: hidden; }
//     .chat-header { background: linear-gradient(135deg, #0d6efd, #0a58ca); color: white; padding: 1.25rem 1rem; text-align: center; border-bottom: 1px solid #e0e0e0; flex-shrink: 0; }
//     .chat-header h2 { margin: 0; font-size: 1.25rem; font-weight: 600; }
//     .chat-history { flex-grow: 1; padding: 1.5rem 1rem; overflow-y: auto; display: flex; flex-direction: column; gap: 1rem; background-color: #f8f9fa; }
//     .chat-message { display: flex; max-width: 85%; }
//     .chat-message p { margin: 0; padding: 0.75rem 1.1rem; border-radius: 20px; line-height: 1.5; }
//     .chat-message.user { align-self: flex-end; }
//     .chat-message.user p { background-color: #007bff; color: white; border-bottom-right-radius: 5px; }
//     .chat-message.bot { align-self: flex-start; }
//     .chat-message.bot p { background-color: #e9ecef; color: #212529; border-bottom-left-radius: 5px; }
//     .typebox-container { background-color: #FFFFFF; padding: 0.5rem 0.5rem 1rem 0.5rem; border-top: 1px solid #dee2e6; border-radius: 0 0 16px 16px; }
//     .chips-section { display: flex; align-items: center; justify-content: center; min-height: 40px; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.25rem; }
//     .chip-button { padding: 0.4rem 0.9rem; margin: 0.25rem; border-radius: 9999px; background-color: #e9ecef; color: #495057; border: none; font-size: 0.875rem; cursor: pointer; transition: background-color 0.2s; }
//     .chip-button:hover { background-color: #dee2e6; }
//     .chip-button:disabled { opacity: 0.6; cursor: not-allowed; }
//     .input-section { display: flex; justify-content: space-between; align-items: center; padding: 0.25rem; margin: 0.5rem auto 0; background-color: #f1f3f5; width: 95%; border-radius: 9999px; }
//     .input-section input { border: none; width: 100%; font-size: 1rem; background-color: transparent; }
//     .input-section button { background: none; border: none; color: #495057; cursor: pointer; padding: 0.5rem; }
//     .input-section button:disabled { color: #adb5bd; cursor: not-allowed; }
//     .send-icon { width: 24px; height: 24px; color: #007bff; }
//     .typing-indicator { display: flex; align-items: center; padding: 0.75rem 1.1rem; background-color: #e9ecef; border-radius: 20px; border-bottom-left-radius: 5px; }
//     .typing-indicator span { height: 8px; width: 8px; background-color: #868e96; border-radius: 50%; display: inline-block; margin: 0 2px; animation: bounce 1.2s infinite ease-in-out; }
//     .typing-indicator span:nth-of-type(1) { animation-delay: -0.32s; }
//     .typing-indicator span:nth-of-type(2) { animation-delay: -0.16s; }
//     @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1.0); } }
//   `}</style>
// );

// const FinalApp = () => (
//   <>
//     <Style />
//     <App />
//   </>
// );

// export default FinalApp;
