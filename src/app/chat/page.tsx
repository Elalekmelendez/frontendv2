"use client";
import SideBar from "./SideBar";
import Chatbot from "@/app/chat/Chatbot";

const ChatPage: React.FC = () => {
    return (
        <>
            <SideBar />
            <Chatbot />
        </>
    )
}

export default ChatPage;