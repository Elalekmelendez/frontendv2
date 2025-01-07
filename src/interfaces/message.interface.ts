// Definición de los tipos para los mensajes
export interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
}