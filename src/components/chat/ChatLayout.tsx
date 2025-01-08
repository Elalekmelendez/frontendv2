import React from "react";
import Header from "./Header";
import MessageList from "./MessageList";
import Input from "./Input";

const ChatLayout = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center">
      <div className="max-w-7xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <Header />

        {/* Message List */}
        <div className="flex-1 p-6 overflow-y-auto">
          <MessageList />
        </div>

        {/* Input Section */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
