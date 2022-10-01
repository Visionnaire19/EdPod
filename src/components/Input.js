import React, {useState} from 'react';
import './Input.css'

const Input = () =>{
    const [value, setValue] = useState("");

    const onKeyUp = (event)=> {
        console.log("OnKeyUp")
		// if(event.key === 'Enter'){
		// }
	}

    return(
        <input className='Input-field'
        type='text'
        name='search'
        value={value}
        placeholder='What are you working on?'
        onKeyPress={onKeyUp}
        onChange={e => {
            setValue(e.target.value)}}>   
        </input>
    );
};

export default Input;