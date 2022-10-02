import React from "react";
import "./Bubbles.css";

const Bubbles = (props, subject, color, link) => {
    return (
        <div className="bubbles" style={{backgroundColor : props.color, height : "20vh", width : "20vh", borderRadius : "50%",}}>
        <a href={props.link}>
            {props.subject}
        </a>
        </div>
    );
};

export default Bubbles;