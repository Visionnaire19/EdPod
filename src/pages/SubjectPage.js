import React from 'react';
import './SubjectPage.css';
import Header from '../components/SubjectHeader'

const SubjectPage = (props) =>{

    return(
       <Header SubjectName = {props.SubjectName}></Header>
    );
};

export default SubjectPage