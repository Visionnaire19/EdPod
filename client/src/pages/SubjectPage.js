import React from 'react';
import './SubjectPage.css';
import Header from '../components/SubjectHeader'
import {randomNumberInRange} from '../utils'

const SubjectPage = (props) =>{

    return(
        <div> 
            <Header SubjectName = {props.SubjectName}></Header>
            <div className="bubble" />
        </div>

       
    );
};

export default SubjectPage

const people = [
    "Visionnaire19",
    "Qudus Shittu",
    "Barima",
    "Clara"
]

const positions = people.map(
    (name) => {
        return { s: randomNumberInRange(0.6,1.0), x: randomNumberInRange(10.0,2000), y:randomNumberInRange(40,500)} 
    });

const imageSizes = [
    { name: "horizontal", width: 600, height: 380 },
    { name: "vertical", width: 400, height: 650 },
    { name: "thumbnail", width: 300, height: 300 },
    ];