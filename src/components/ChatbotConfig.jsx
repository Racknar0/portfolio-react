// ChatbotConfig.js
import { createChatBotMessage } from "react-chatbot-kit";

const botName = "PortfolioBot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`¡Hola! Estoy aquí para responder tus preguntas sobre Jonathan.`),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#006d77",
    },
    chatButton: {
      backgroundColor: "#008080",
    },
  },
};

export default config;
