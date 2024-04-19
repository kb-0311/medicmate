import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Chat.module.css';

function Chat() {
  const { prescriptionId } = useParams();

  return (
    <div className={styles.chatContainer}>
      <h2>Chat</h2>
      <div className={styles.messagesContainer}>
        {/* Messages will be displayed here */}
      </div>
      <input type="text" placeholder="Type a message..." className={styles.messageInput} />
      <button className={styles.sendButton}>Send</button>
    </div>
  );
}

export default Chat;