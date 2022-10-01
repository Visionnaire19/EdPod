import React  from 'react';
import './Subject.css'

/**
 * 
 * @param {country} country 
 * @returns 
 */
const Subject = (props) =>{
    
    return(
            <div className='u-flex Subject-container'>
                <div className='Subject-text'>
                    {props.subject}   
                </div>

            </div>


    );
}
export default Subject
