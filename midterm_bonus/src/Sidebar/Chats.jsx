import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../Firebase/Firebase';
import './Chats.css';
import ChatMessages from '../Home/ChatMessage';

const Chats = () => {
  const [chatsData, setChatsData] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchChats = async () => {
      const chatCollection = collection(firestore, 'chats');
      const chatsSnapshot = await getDocs(chatCollection);
      const chatData = chatsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setChatsData(chatData);
    };

    fetchChats();
  }, []);

  const handleChatClick = (chatId) => {
    setSelectedChatId(chatId);
  };

  return (
    <div className="chats-container">
      <div className="leftbar">
        <h2>Chats</h2>
        <input
          className=""
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="chats-list">
          {chatsData
            .filter((chat) => {
              const searchTerms = searchQuery.toLowerCase().split(' ');
              return searchTerms.every((term) =>
                chat.name.toLowerCase().includes(term)
              );
            })
            .map((chat) => (
              <div
                key={chat.id}
                className={`chat`}
                onClick={() => handleChatClick(chat.id)}
              >
                <div className='chat-info'>
                    <img className='chats-photo' src={chat.photo} alt={`${chat.name} profile`} />
                    <p>{chat.name}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      {selectedChatId && (
        <ChatMessages chatId={selectedChatId} />
      )}
    </div>
  );
};

export default Chats;