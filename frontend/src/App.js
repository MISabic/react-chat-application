import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import PreviousMsg from './PreviousMsg/PreviousMsg';
import Message from './Message/Message';

const client = new WebSocket('ws://localhost:5000', 'echo-protocol');

client.onerror = () => console.log('Connection Error');
client.onmessage = () => console.log('WebSocket Client Connected');
client.onclose = () => console.log('echo-protocol Client Closed');

const App = () => {
  const [messages, setMessages] = useState([]);
  client.onmessage = e => {
    if (typeof e.data === 'string') {
      const { user, userName, text } = JSON.parse(e.data);
      setMessages([...messages, { user, userName, text }]);
    }
  };

  let message = [];
  const handleChange = e => message[0] = e.target.value;
  const handleClick = e => {
    if(message[0]) client.send(message[0]);
  }
  
  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages]);

  return (
    <div className='container'>
      <PreviousMsg messages={messages} bottomRef={bottomRef}/>
      <Message message={message} handleClick={handleClick} handleChange={handleChange}/>
    </div>
  );
}

export default App;