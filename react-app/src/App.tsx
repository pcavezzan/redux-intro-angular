import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Messages} from "./Messages";
import {MessageCreate} from "./MessageCreate";
import {useMessages} from "./use-messages.hook";

function App() {
  const {messages, onMessageSubmitForm} = useMessages();
  const nbMessages = messages.length;

  return (
    <div className="App">
      <Header messageCount={nbMessages}/>
      <Messages messages={messages}/>
      <MessageCreate messageSubmitForm={onMessageSubmitForm}/>
    </div>
  );
}

export default App;
