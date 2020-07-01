/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './Search.css';


export default function Search() {
  return (
     <div className="Search">
    <Autocomplete
      label="Search or Type a command"
      options={list}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => <TextField {...params}   />}
    />
    </div>
  );
}

const list = [ 
  { title: 'Nem Kumar' },
  { title: 'Mahendra ' },
  { title: 'Prasad ' },
  { title: 'Mankaran' },
  { title: 'Fahad' },
  { title: 'Deepika' },
  { title: 'Varsha' },
 
 
  
];

