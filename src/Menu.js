import React from 'react';
import './Menu.css';
import activity from './Icons/activity.svg';
import chat from './Icons/chat.svg';
import team  from './Icons/team.svg';
import Files  from './Icons/Files.svg';

import help  from './Icons/help.svg';





function Menu(){
    return(
        <div className="Menu">
            <img src={activity} />
            Activity 
            <div>
            <img src={chat} />
            Chat
            <img src={team} />
            team
            <img src={Files} />
            Files
            <img src={help} />
            help
            </div> 
        </div>
    )
}

export default Menu;