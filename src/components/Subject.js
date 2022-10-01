import React  from 'react';
import './Subject.css'
import { navigate } from "@reach/router"

/**
 * 
 * 
 * @returns 
 */
const Subject = (props) =>{
    const name = props.SubjectName
    const move = () => {
        navigate(`/subjects/${name}`)
        
    }
    return(
            <div className='u-flex Subject-container' onClick={move}>
                <div className='Subject-text'>
                    {name}   
                </div>

            </div>


    );
}
export default Subject
