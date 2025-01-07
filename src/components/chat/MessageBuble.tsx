"use client";
import React from "react";
import { MessageBubbleProps } from "@/interfaces/";


const MessageBubble: React.FC<MessageBubbleProps> = ({ sender, text }) => {
    const isUser = sender === "user";

    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"} my-2`}>
            <div
                className={`max-w-[70%] p-3 rounded-lg shadow-md text-left 
                ${isUser ? "bg-[#7CC3C7] text-white" : "bg-gray-200 text-black"}`}
            >
                {text}
            </div>
        </div>

    );
};

export default MessageBubble;
