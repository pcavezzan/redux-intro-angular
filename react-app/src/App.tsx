import React from 'react';
import './App.css';
import { Header } from "./Header";
import { Messages } from "./Messages";
import { MessageCreate } from "./MessageCreate";

function App() {
  return (
    <div className="App">
      <Header/>
      <Messages/>
      <MessageCreate/>
    </div>
  );
}

export default App;
