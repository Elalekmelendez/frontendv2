import React from 'react'
import MessageBubble from './MessageBuble'
import { Message } from '@/interfaces/chat/message'

interface MessageList {
    messages: Message[],
    messagesEndRef: React.RefObject<HTMLDivElement | null>,
}

const MessageList: React.FC<MessageList> = ({ messages, messagesEndRef }) => {
    return (
        <div className="flex-1 p-3 overflow-y-auto bg-gray-100 max-h-[800px]">
            {messages.map((msg) => (
                <MessageBubble key={msg.id} sender={msg.sender} text={msg.text} />
            ))}
            <div ref={messagesEndRef} />

        </div>
    )
}

export default MessageList