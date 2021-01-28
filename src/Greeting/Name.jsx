import React, {useState} from 'react';
import Greeting from './AddName';
import './styles.css';

const Name= () => {
    const [name, setName] =useState([]);

    return (
  
  <>
  <input
    onChange={({target: {value}}) => setName(value)}
    placeholder="Enter your name"
  />
  <Greeting name={name}/>
</>
 );
};

export default Name;