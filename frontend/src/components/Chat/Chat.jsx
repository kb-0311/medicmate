import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import styles from './Chat.module.css';
// import { useSelector } from 'react-redux';

const socket = io('http://localhost:8000');

function Chat() {
  const { prescriptionId } = useParams();
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);


  // const userEmail = useSelector((state) => state.user.email);

  useEffect(() => {
    socket.on('message', (msg) => {
      setChat((prevChat) => [...prevChat, msg]);
    });

    // Cleanup on component unmount
    return () => socket.off('message');
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('message', { text: message, prescriptionId });
      // socket.emit('message', { text: message, prescriptionId, email: userEmail });
      setMessage('');
    }
  };

  return (
    <div className={styles.chatContainer}>
      <h2>Chat</h2>
      <div className={styles.messagesContainer}>
        {chat.map((msg, index) => (
          <p key={index}>{msg.text}</p>
          // <p key={index}><strong>{msg.email}:</strong> {msg.text}</p>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        className={styles.messageInput}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage} className={styles.sendButton}>Send</button>
    </div>
  );
}

export default Chat;