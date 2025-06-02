import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import Chat from './Chat';
import '../styles/ChatButton.css';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

  const toggleChat = () => setIsOpen(!isOpen);
  const closeBubble = () => setShowBubble(false);

  return (
    <div className="chat-button-container">
      {isOpen && <Chat toggleChat={toggleChat} />}

      <div className="chat-float-wrapper">
        {showBubble && !isOpen && (
          <div className="chat-bubble">
            Fale com nosso suporte!
            <button className="chat-bubble-close" onClick={closeBubble}>
              <X size={12} />
            </button>
          </div>
        )}

        <button className="chat-toggle-button" onClick={toggleChat}>
          <img src="chatlogo.png" alt="Logo" className="chat-logo" />
        </button>
      </div>
    </div>
  );
};

export default ChatButton;
