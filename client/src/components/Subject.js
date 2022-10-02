import React  from 'react';
import './Subject.css'
import { navigate, Link } from "@reach/router"

/**
 * 
 * 
 * @returns 
 */
const Subject = (props) =>{
    const name = props.SubjectName
    const move = () => {
        // navigate(`/subjects/${name}`)
        
    }
    return(
        <Link to={`subjects/${name}`}>  
            <div className='u-flex Subject-container' onClick={move}>
                <div className='Subject-text'>
                    {name}   
                </div>

            </div>
            </Link>


    );
}
export default Subject
