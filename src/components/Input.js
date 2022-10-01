import React, {useState} from 'react';
import {AiFillCaretDown} from 'react-icons/ai'
import './Input.css'
import '../utils.css'
import Subject from './Subject';

const Input = () =>{
    const [value, setValue] = useState("");
    const [clicked, setClicked] = useState(true);
    let list = null;
    let ToDisplay = subjects.filter(subject => subject.match(new RegExp(value, "i")));
    let empty = ToDisplay !== 0;

    const handleListDisplay = () => {
        console.log()
        setClicked(!clicked)
   } 


    const onKeyUp = (event)=> {
        console.log("OnKeyUp")
        const newCountry = ToDisplay[0]
		// if(event.key === 'Enter'){
		// }
	}

    if(clicked === true){
        list = (<div></div>)
    }else{
		
        list = subjects.filter(subject => subject.match(new RegExp(value, "i")))
        .map((subject) => (
            <Subject subject ={subject}></Subject>
            
        ))
    }

    return(
        <div className='u-flexColumn Input-page'>
        <div  className='u-flex Input-container'>
        <input className='Input-field'
        type='text'
        name='search'
        value={value}
        placeholder='What are you working on?'
        onKeyPress={onKeyUp}
        onChange={e => {
            setClicked(false)
            setValue(e.target.value)}}>   
        </input>

        <AiFillCaretDown size={20} onClick={handleListDisplay} ></AiFillCaretDown>

        
        </div>
        <div className='Input-listContainer'>
       {list}
        </div>
       
       </div>
      
    );
};

export default Input;

const subjects = [
    "Calculus",
    "Multivariable Calculus",
    "Data Structures",
    "Python",
    "Java",
    "Sewing",
    "The World??"
]