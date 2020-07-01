import React from 'react';
import './RecentLink.css';

function RecentLink(){
    
    return(
        <div className="RecentLink">
        <div class="dropdown" >
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
          Recent
        </button>
        <div class="dropdown-menu">
        <h3>Nem Kumar</h3>
        <h3>Mahendra</h3>
        <h3>Prasad Pawar</h3>
        <h3>Mankaran</h3>
        <h3>Varsha</h3>
        </div>
      </div>
      </div>
    );
}

export default RecentLink;