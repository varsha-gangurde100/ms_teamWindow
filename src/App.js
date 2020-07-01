import React from 'react';
import './App.css';
import Window from './window.js';
import './window.css';
import Menu from './Menu.js';
import Chatlist from './ChatList.js';
import ChattingBar from './ChattingBar.js';
import Chatting from './Chatting.js';
import './Chatting.css';

function App() {
  return (
     <div className="App">
          <div >
          <Window /> 
          <div className="section-2" >
           <Menu />
           <div className="section-3" >
           <Chatlist />
           <div  className="section-4">
           <ChattingBar />
           </div>
           <div  className="section-5">
            <Chatting />
           </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
