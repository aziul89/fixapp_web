import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import Chat from './Chat';
import '../styles/ChatButton.css';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="chat-button-container">
      {isOpen && <Chat toggleChat={toggleChat} />}
      <button className="chat-toggle-button" onClick={toggleChat}>
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default ChatButton;
