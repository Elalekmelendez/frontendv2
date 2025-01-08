"use client";
import React from "react";

const MessageBuble: React.FC<{ sender: string; text: string }> = ({
  sender,
  text,
}) => {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-lg px-4 py-3 rounded-lg shadow ${
          isUser
            ? "bg-[#7DC3D7] text-white"
            : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default MessageBuble;
