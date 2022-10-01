import React from 'react';
import './SubjectHeader.css'

const SubjectHeader = (props) => {

    return (
        <div className="Subject-header">
         <h1>{props.name}</h1>
      </div>
    );

};

export default SubjectHeader;