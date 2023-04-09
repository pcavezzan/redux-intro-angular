import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./Header";
import {Messages} from "./Messages";
import {MessageCreate} from "./MessageCreate";
import {getMessages} from "./http-api.service";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const nbMessages = messages.length;
  const onMessageSubmitForm = (message: Message) => {
    setMessages(() => [...messages, message]);
  };

  useEffect(() => {
    getMessages()
      .then((messages) => {
        console.log(messages);
        setMessages(messages)
      });
  }, [])

  return (
    <div className="App">
      <Header messageCount={nbMessages}/>
      <Messages messages={messages}/>
      <MessageCreate messageSubmitForm={onMessageSubmitForm}/>
    </div>
  );
}

export default App;
