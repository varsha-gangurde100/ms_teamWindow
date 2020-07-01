import React from 'react';
import './ChattingBar.css';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';
import plus from './Icons/plus.svg';
import video from './Icons/video.svg';
import screenshare from './Icons/screenshare.svg';
import line from './Icons/line.svg';
import Addpeople from './Icons/Addpeople.svg';
import PopOut from './Icons/PopOut.svg';


function ChattingBar(){
    return(
        <Router>
       <div className="ChattingBar">
        <h3>Nem kumar</h3>
       <span class="section-1"  >
       <Link to="/RecentLink" > Chat   </Link>
       <Link to="/RecentLink" > Files   </Link>
       <Link to="/RecentLink" > Organization   </Link>
       <Link to="/Recent" ><img src={plus}></img></Link>
       <span class="second">
    <Link to="/video" ><img src={video}></img></Link>
    <Link to="/screenshare" ><img src={screenshare}></img></Link>
    <img src={line}></img>
    <Link to="/Addpeople" ><img src={Addpeople}></img></Link>
    <Link to="/Popout" ><img src={PopOut}></img></Link>
    </span>
    </span>
    </div>
    
    </Router>
    )
}
export default ChattingBar;