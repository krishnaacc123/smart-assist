import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import ChatBot from './ChatBot'; 

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

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
      {isOpen && <ChatBot />}
    </>
  );
};

const ChatBotElement = reactToWebComponent(App, React, ReactDOM);
customElements.define('chat-bot', ChatBotElement);
