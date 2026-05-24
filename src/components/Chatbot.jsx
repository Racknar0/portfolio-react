// ChatBot.jsx
import  { useState } from "react";
import Chatbot1 from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import config from "./ChatbotConfig";
import ActionProvider from "./ChatbotActionProvider";
import MessageParser from "./ChatbotMessageParser";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const theme = {
    background: "#f5f8fb",
    fontFamily: "Arial",
    headerBgColor: "#0d6efd",
    headerFontColor: "#fff",
    headerFontSize: "18px",
    botBubbleColor: "#0d6efd",
    botFontColor: "#fff",
    userBubbleColor: "#f0f0f5",
    userFontColor: "#333",
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden">
          <ThemeProvider theme={theme}>
            <Chatbot1
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
            />
          </ThemeProvider>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg hover:bg-blue-700 flex items-center justify-center"
        aria-label="Toggle Chatbot"
      >
        💬
      </button>
    </div>
  );
};

export default Chatbot;
