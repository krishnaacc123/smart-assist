import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import ChatBot from './ChatBot'; // Import your React componentfdghbdfjhg

// Convert React component to Web Component
const ChatBotElement = reactToWebComponent(ChatBot, React, ReactDOM);

// Define the Web Component
customElements.define('chat-bot', ChatBotElement);
