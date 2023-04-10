import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./Header";
import {Messages} from "./Messages";
import {MessageCreate} from "./MessageCreate";
import {createMessage, findAllMessages} from "./http-api.service";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const nbMessages = messages.length;
  const onMessageSubmitForm = (message: Message) => {
    (async () => {
      await createMessage(message);
      const messages = await findAllMessages();
      setMessages(messages);
    })();
  };

  useEffect(() => {
    (async () => {
      const messages = await findAllMessages();
      setMessages(messages);
    })();
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
