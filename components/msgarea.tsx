import React from 'react'
import { useState } from 'react';

const MessageArea = ({ messages }: { messages: string[] }) => {

    

  return (
           <div className="flex-1 overflow-y-auto p-2 flex flex-col ">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="mb-2 bg-gray-800 text-white p-2 rounded-lg self-end w-fit max-w-[70%] "
            >
              {msg}
            </div>
          ))}
        </div>
  )
}

export default MessageArea