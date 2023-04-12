import React from 'react';
import './App.css';
import { Header } from "./Header";
import { Messages } from "./Messages";
import { MessageCreate } from "./MessageCreate";
import { MessageContextProvider } from "./MessagesContextProvider";

function App() {
  return (
    <div className="App">
      <MessageContextProvider>
        <Header/>
        <Messages/>
        <MessageCreate/>
      </MessageContextProvider>
    </div>
  );
}

export default App;
