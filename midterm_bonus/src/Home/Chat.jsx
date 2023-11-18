// Chat.jsx
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {auth, db, firestore } from '../Firebase/Firebase';


const Chat = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => {
      // Clean up the subscription
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    // Real-time listener for new messages
    const unsubscribe = db.collection('messages').orderBy('timestamp').onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });

    return () => {
      // Clean up the subscription
      unsubscribe();
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    // Add the message to the Firestore database
    db.collection('messages').add({
      message: message,
      timestamp: new Date(),
      user: user.displayName,
      userId: user.uid,
    });

    // Clear the input field after sending the message
    setMessage('');
  };

  return (
    <div>
      <div>
        {messages.map(({ id, data }) => (
          <p key={id}>
            <strong>{data.user}</strong>: {data.message}
          </p>
        ))}
      </div>
      <form>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" onClick={sendMessage} disabled={!user}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
