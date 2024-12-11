// ChatBot.js
import React from "react";
import styled from "styled-components";
import { Button } from "@razorpay/blade/components"; // Replace with actual import
import { BladeProvider } from '@razorpay/blade/components';
import { bladeTheme } from '@razorpay/blade/tokens';

// Styled Components
const ChatBotContainer = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 60px; /* Adjusted to be above the button */
  right: 20px;
  background: white;
  z-index: 999;
`;

const Header = styled.div`
  background: #007bff;
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
`;

const MessageArea = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

const Footer = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
  padding: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 5px;
`;

const ChatBot = () => {
  const [messages, setMessages] = React.useState(['Hi! How can I help you?']);
  const inputRef = React.useRef(null);
  return (
    <BladeProvider themeTokens={bladeTheme} colorScheme="light">
      <ChatBotContainer>
        <Header>ChatBot</Header>
        <MessageArea>
          <p>
            {messages.map((message, index) => (
              <div key={index}>{message}</div>
            ))}
          </p>
        </MessageArea>
        <Footer>
          <Input type="text" placeholder="Type a message..." ref={inputRef}/>
          <Button onClick={() => {
            setMessages([...messages, inputRef.current.value])
            inputRef.current.value = '';
          }}>Send</Button>
        </Footer>
      </ChatBotContainer>
    </BladeProvider>
  );
};

export default ChatBot;
