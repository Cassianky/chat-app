import React, { useState } from "react";
import { Chatbot, createChatBotMessage } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./App.css";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { Box } from "@mui/material";

const App = ({ children }) => {
  const config = {
    initialMessages: [
      createChatBotMessage(`Hello, welcome to ChatGPT powered bot!`),
      createChatBotMessage(
        `Good Day! How may I help you? Please input your questions`,
        {
          delay: 1500,
        }
      ),
    ],
    customStyles: {
      // Overrides the chatbot message styles
      botMessageBox: {
        backgroundColor: "#9F91CC",
      },
      // Overrides the chat button styles
      chatButton: {
        backgroundColor: "#9F91CC",
      },
    },
  };
  return (
    <Box>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </Box>
  );
};

export default App;
