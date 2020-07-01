import React from 'react';
import './window.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import Search from './Search.js';
import './window.css';



function Window(){
    return(
        <div className='Window'>
        <AppBar color="primary"  position="static">
          <Toolbar>
           <Typography >
           <IconButton >
           <ArrowBackIosSharpIcon/>  
            </IconButton>
            <IconButton >
            <ArrowForwardIosSharpIcon/>     
            </IconButton>
            <IconButton>
              <Search/>
            </IconButton>
           </Typography>
          </Toolbar>
          </AppBar>
        </div>
    ) 
}

export default Window;