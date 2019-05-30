import React from "react";
import ChatBot from "react-simple-chatbot";

export default function ServiceBot() {
  return (
    <ChatBot
      steps={[
        {
          id: "hello-world",
          message: "Hello World!",
          end: true
        }
      ]}
    />
  );
}
