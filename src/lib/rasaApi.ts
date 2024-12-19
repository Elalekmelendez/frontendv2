import axios from "axios";

export const sendMessageToRasa = async (message: string): Promise<string> => {
  try {
    const response = await axios.post("http://localhost:5005/webhooks/rest/webhook", {
      sender: "user",
      message: message,
    });

    // Devuelve el primer mensaje del bot si existe
    return response.data[0]?.text || "Sin respuesta del bot";
  } catch (error) {
    console.error("Error al comunicarse con Rasa:", error);
    return "Error al comunicarse con el servidor.";
  }
};
