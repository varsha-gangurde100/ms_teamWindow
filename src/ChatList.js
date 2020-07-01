import React from 'react';
import './ChatList.css';
import RecentLink from './RecentLink.js';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';

function ChatList(){
    return(
      <Router>
        <div className="ChatList">
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
     Chat      
      <Link to="/RecentLink" > Recent   </Link>
      <a href="Contacts">   Contacts  </a>
      <Route path="/RecentLink" component={RecentLink} />
     
    </div>   
  </div>
</nav>
</div>
</Router>
    );
}

export default ChatList;

