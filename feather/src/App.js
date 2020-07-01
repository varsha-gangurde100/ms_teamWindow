import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';


function App() {  
  const tem=[{id:"101",name:"varsha"},{id:"102",name:"jiya"}];
  function fun(temp=()=>{return console.log("hii in arrow")}){
    console.log("in fun");
    console.log(tem.map((value)=>{return console.log(value.id);
  }));
  }

   function show(){
     console.log("in show");
   }

  fun(show);

  return(
    <h11>hello world </h11>    
  )
}

export default App;

