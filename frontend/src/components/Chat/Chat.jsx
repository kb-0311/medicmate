import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import styles from "./Chat.module.css";
import Navbar from "../Navbar/Navbar";
// import { useSelector } from 'react-redux';

const socket = io("http://localhost:8000");

function Chat() {
  const { prescriptionId } = useParams();
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  // const userEmail = useSelector((state) => state.user.email);
  const [isDoctor, setIsDoctor] = useState(true);

  useEffect(() => {
    socket.on("message", (msg) => {
      setChat((prevChat) => [...prevChat, msg]);
    });

    // Cleanup on component unmount
    return () => socket.off("message");
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("message", { text: message, prescriptionId });
      // socket.emit('message', { text: message, prescriptionId, email: userEmail });
      setMessage("");
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <h2 className={styles.title}>Doctor - Operator Chat</h2>
      <div className={styles.chatContainer}>
        <div className={styles.messagesContainer}>
          {chat.map((msg, index) => (
            <div className={styles.chatMessageContainer}>
              {isDoctor ? (
                <>
                  <img src="/doctor-icon.png" alt="DOC" />
                  <div className={styles.chatMessageDOC}>
                    <p key={index}>{msg.text}</p>
                  </div>
                </>
              ) : (
                <>
                  <img src="/operator-icon.png" alt="OP" />
                  <div className={styles.chatMessageOP}>
                    <p key={index}>{msg.text}</p>
                  </div>
                </>
              )}
            </div>
            // <p key={index}><strong>{msg.email}:</strong> {msg.text}</p>
          ))}
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Type a message..."
            className={styles.messageInput}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage} className={styles.sendButton}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
