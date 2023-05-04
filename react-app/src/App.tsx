import React from 'react';
import './App.css';
import { Header } from './Header';
import { Messages } from './Messages';
import { MessageCreate } from './MessageCreate';
import { useDispatch } from 'react-redux';
import { LOAD_MESSAGES } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  dispatch({type: LOAD_MESSAGES});
  return (
    <div className="App">
      <Header/>
      <Messages/>
      <MessageCreate/>
    </div>
  );
}

export default App;
