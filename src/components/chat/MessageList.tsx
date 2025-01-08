import React from "react";
import MessageBubble from "./MessageBuble";

const MessageList = () => {
  const messages = [
    { id: 1, sender: "user", text: "Hola, ¿puedes ayudarme con algo?" },
    { id: 2, sender: "bot", text: "¡Claro! ¿En qué necesitas ayuda?" },
    { id: 3, sender: "user", text: "Estoy buscando información sobre ZenomyAI." },
    { id: 4, sender: "bot", text: "ZenomyAI es una plataforma avanzada para potenciar tu negocio." },
  ];

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <MessageBubble key={message.id} sender={message.sender} text={message.text} />
      ))}
    </div>
  );
};

export default MessageList;
