import React, {useState} from 'react';
import './styles.css';

const AddName=props => {

    const[inputs,setInputs]=useState({});

    const {name, setName}=props;

    const handleChange=event => {
        event.persist();
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        });
    };

    return (
        <>
       <header>
           <h1>Bonjour {name}! How goes?</h1>
        </header>
        </>
    );

};

export default AddName;