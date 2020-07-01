import React from 'react';
import './Chatting.css';
import send from './Icons/send.svg';
import {useState} from 'react';
import setText from './action/setText.js';
import {useSelector,useDispatch} from 'react-redux';


var temp=false;
function Chat(props){ 
  return(
    <div >
     
    </div>
  )
}

function ShowMessage(props){
const chat=useSelector(state=>state.chatbubble);
const newChat=chat.map(chat=>{    
           return (<div className="list">
             <p>{chat}</p>
           </div>
           )
         })
  return(
    <div >
      {newChat}
    </div>
  )
}

function Chatting()
{
  var [message,setMessage]=useState("type a new message");
  var [check,setCheck]=useState(false);
  const dispatch=useDispatch();
  const chat=useSelector(state=>state.chatbubble);

 var handleClick=(e)=>{  
    alert(chat.map((test,i)=>{ return i+test}));
    setCheck(true);  
    dispatch(setText(message));
    temp=true; 
  }
  var handleChange=(event)=>{
    setMessage(event.target.value);
   // alert(event.target.value);
  }

   var fun=(props)=>
   {
    if(temp)
    {
      return <ShowMessage msg ={props}/>;
    }
    else
    return null;    
   }
   
  return(
  <div>    
  <input class="Chatting-1" type="text"  placeholder="Type new message" onChange={handleChange} ></input>
  <img class="Chatting-2" src={send}  onClick={handleClick}></img>
  <Chat />
  {fun(message)}
  <br></br>
  </div>  
    );
}

export default Chatting;
//<div className="Chatting"