import { useState, ChangeEvent, KeyboardEvent, useRef, useEffect } from "react";
import { sendMessageToRasa } from "@/lib/rasaApi";
import { Message } from "@/interfaces/message.interface";
import { v4 as uuidv4 } from "uuid";

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);


  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessages: Message[] = [
        ...messages,
        { id: uuidv4(), sender: "user", text: input },
      ];
      setMessages(newMessages);

      setIsLoading(true);

      try {
        const responseText = await sendMessageToRasa(input);
        const botMessage: Message = {
          id: uuidv4(),
          sender: "bot",
          text: responseText,
        };

        setMessages((prev) => [...prev, botMessage]); // Actualizar mensajes
      } catch (error) {
        console.error("Error al enviar el mensaje:", error);
        const errorMessage: Message = {
          id: uuidv4(),
          sender: "bot",
          text: "Hubo un problema al procesar tu mensaje. Intenta nuevamente.",
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }

      setInput("");
    }
  };

  // Manejar cambios en el input
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  // Enviar mensaje con Enter
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setInput("");
      handleSendMessage();
    }
  };

  // Función para desplazar el scroll al último mensaje
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  // Efecto para desplazarse cuando los mensajes cambian
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!isLoading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLoading]);

  return {
    input,
    setInput,
    messages,
    inputRef,
    isLoading,
    handleKeyDown,
    messagesEndRef,
    handleSendMessage,
    handleInputChange,
  };
};
