import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import '../styles/AdminChat.css';

function AdminChat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const messagesRef = collection(db, 'messages');

  useEffect(() => {
    const q = query(messagesRef, orderBy('timestamp'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    await addDoc(messagesRef, {
      name: 'Atendente',
      text: newMessage,
      timestamp: serverTimestamp(),
    });

    setNewMessage('');
  };

  return (
    <div className="admin-chat-container">
      <h2>🧑‍💼 Painel do Atendente</h2>

      <div className="admin-chat-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`admin-chat-message ${
              msg.name === 'Atendente' ? 'admin' : 'user'
            }`}
          >
            <strong>{msg.name}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <form className="admin-chat-form" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Digite sua resposta..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default AdminChat;
