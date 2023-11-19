import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {auth, db, firestore } from '../Firebase/Firebase';
import './Chat.css'


const ChatBefore = () => {
  return(
    <div className='chat-before'>
      <div>
        abc
      </div>
    </div>
  );
};

export default ChatBefore;
