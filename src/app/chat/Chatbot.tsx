"use client";
import React from "react";
import { useChat } from "@/hooks/useChat";
import Header from "@/components/chat/Header";
import Button from "@/components/chat/Button";
import Input from "@/components/chat/Input";
import MessageList from "@/components/chat/MessageList";

const Chatbot: React.FC = () => {

  const {
    input,
    inputRef,
    messages,
    isLoading,
    handleKeyDown,
    messagesEndRef,
    handleSendMessage,
    handleInputChange,
  } = useChat();

  return (
    <div className="w-[400px] h-[850px] mx-auto border border-gray-300 rounded-lg flex flex-col overflow-hidden font-sans mt-5">
      <Header />

      <MessageList messages={messages} messagesEndRef={messagesEndRef} />

      <div className="flex p-2 border-t border-gray-300">

        <Input
          input={input}
          inputRef={inputRef}
          handleKeyDown={handleKeyDown}
          handleInputChange={handleInputChange}
          isLoading={isLoading}
        />

        <Button handleSendMessage={handleSendMessage} isLoading={isLoading} />


      </div>

    </div>
  );
};

export default Chatbot;