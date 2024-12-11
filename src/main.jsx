import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import ChatBot from './ChatBot';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatBotRef = React.useRef(null);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const cWidget = () => {
    setIsOpen(false);
  };

  const oWidget = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    window.openChatBot = oWidget;
    window.closeChatBot = cWidget;
  }, []);

  return (
    <>
      <button 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onClick={toggleWidget}
      >
        {isOpen ? 'Close Chat' : 'Open Chat'}
      </button>
      {isOpen && <ChatBot ref={chatBotRef} />}
    </>
  );
};

const ChatBotElement = reactToWebComponent(App, React, ReactDOM);
customElements.define('chat-bot', ChatBotElement);


