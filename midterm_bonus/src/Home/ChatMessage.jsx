// ChatMessages.js

import React, { useState, useEffect } from 'react';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { firestore } from '../Firebase/Firebase';

const ChatMessage = ({ chatId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesCollection = collection(firestore, 'messages');
    const chatMessagesQuery = query(
      messagesCollection,
      where('chatId', '==', chatId),
      orderBy('timestamp', 'asc')
    );

    const unsubscribe = onSnapshot(chatMessagesQuery, (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messagesData);
    });

    return () => unsubscribe();
  }, [chatId]);

  return (
    <div className="chat-messages">
      {messages.map((message) => (
        <div key={message.id} className="message">
          <p>{message.text}</p>
          {/* Add additional message details as needed */}
        </div>
      ))}
    </div>
  );
};

export default ChatMessage;
