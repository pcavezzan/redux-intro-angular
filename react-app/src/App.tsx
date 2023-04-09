import React, {useState} from 'react';
import './App.css';
import {Header} from "./Header";
import {Messages} from "./Messages";
import {MessageCreate} from "./MessageCreate";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const nbMessages = messages.length;
  const onMessageSubmitForm = (message: Message) => {
    setMessages(() => [...messages, message]);
  };

  return (
    <div className="App">
      <Header messageCount={nbMessages}/>
      <Messages messages={messages}/>
      <MessageCreate messageSubmitForm={onMessageSubmitForm}/>
    </div>
  );
}

export default App;
