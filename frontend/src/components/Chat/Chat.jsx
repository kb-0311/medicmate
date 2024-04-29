import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import styles from "./Chat.module.css";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
// import { useSelector } from 'react-redux';

// Establish socket connection when component mounts
const socket = io("http://localhost:8000", {
  query: {
    prescriptionId: window.location.href.split("/chat/")[1],
  },
});
function Chat() {
  const { prescriptionId } = useParams();
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  // const userEmail = useSelector((state) => state.user.email);
  const { account } = useSelector((state) => state.user);
  const messagesEndRef = useRef(null); // Reference to the last message container

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
      socket.emit("message", {
        text: message,
        prescriptionId,
        role: account ? account.role : "",
        name: account ? account.name : "",
      });
      // socket.emit('message', { text: message, prescriptionId, email: userEmail });
      setMessage("");
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat]);

  return (
    <div className={styles.container}>
      <Navbar />
      <h2 className={styles.title}>Doctor - Operator Chat</h2>
      <div className={styles.chatContainer}>
        <div className={styles.messagesContainer}>
          {chat.map((msg, index) => (
            <div className={styles.chatMessageContainer}>
              {msg.role === "doctor" ? (
                <div className={styles.chatMessageContainerDOC}>
                  <img src="/doctor-icon.png" alt="DOC" />
                  <div className={styles.chatMessageDOC}>
                    <h5 className={styles.messageName}>Dr. {msg.name}</h5>
                    <p key={index}>{msg.text}</p>
                  </div>
                </div>
              ) : (
                <div className={styles.chatMessageContainerOP}>
                  <div className={styles.chatMessageOP}>
                    <h5 className={styles.messageName}>{msg.name}</h5>
                    <p key={index}>{msg.text}</p>
                  </div>
                  <img src="/operator-icon.png" alt="OP" />
                </div>
              )}
              <div ref={messagesEndRef} />
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
