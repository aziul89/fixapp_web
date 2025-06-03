import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';
import axios from 'axios';
import { X, ArrowRight, Image as ImageIcon } from 'lucide-react';

const Chat = ({ toggleChat }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Configurações do cloudinary
  const CLOUD_NAME = 'dcnk19biz';
  const UPLOAD_PRESET = 'chat-upload'; 

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);
    formData.append('cloud_name', CLOUD_NAME);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
      );
      return res.data.url;
    } catch (err) {
      console.error('Erro ao enviar imagem:', err);
      return null;
    }
  };

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    await addDoc(collection(db, 'messages'), {
      text: input,
      imageUrl: '',
      timestamp: serverTimestamp(),
      user: 'Cliente'
    });
    setInput('');
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = await uploadImageToCloudinary(file);
    if (!imageUrl) return;

    await addDoc(collection(db, 'messages'), {
      text: '',
      imageUrl: imageUrl,
      timestamp: serverTimestamp(),
      user: 'Cliente'
    });
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <span>📌 SuporteFix</span>
        <button className="close-btn" onClick={toggleChat}>
          <X size={17} color="grey" style={{ marginLeft: '-7px' }} strokeWidth={3} />
        </button>
      </div>

      <div className="chat-messages">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`chat-message ${msg.user === 'Atendente' ? 'attendant' : 'client'}`}
          >
            <strong>{msg.user}:</strong>{' '}
            {msg.text && <span>{msg.text}</span>}

            {msg.imageUrl && (
              <div>
                <img
                  src={msg.imageUrl}
                  alt="enviada"
                  style={{ maxWidth: '200px', borderRadius: '8px', marginTop: '5px' }}
                />
              </div>
            )}

            <div className="timestamp">
              {msg.timestamp?.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
      </div>

      <form className="chat-input" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <label htmlFor="upload-photo" className="upload-icon">
          <ImageIcon size={18} color='blue' />
        </label>
        <input
          type="file"
          accept="image/*"
          id="upload-photo"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
        <button type="submit">
          <ArrowRight size={20} style={{ marginLeft: '3px' }} />
        </button>
      </form>
    </div>
  );
};

export default Chat;
