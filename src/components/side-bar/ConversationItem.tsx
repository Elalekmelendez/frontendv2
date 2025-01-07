import React from 'react'

const ConversationItem = ({ text }: { text: string }) => (
    <li className="p-3 bg-[#7CC3C7] rounded-md hover:bg-[#7CC385] transition duration-200 cursor-pointer">
        <span className="text-sm font-medium">{text}</span>
    </li>
);


export default ConversationItem