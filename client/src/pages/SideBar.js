import React from 'react';
import './Sidebar.css';

const SideBar = () => {

    const openNav = () => {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }
      
      /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
      const closeNav = () => {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

    const delete_stuff = rooms.map( (room)  => {
        return room });
    

    return (
    <div>
        <div id="mySidebar" className="sidebar">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            {delete_stuff.map( (item, index) => {
                return <div key={index}> 
            {item}
            </div>
            })}  
        </div>
           
        <div id="main">
        <button className="openbtn" onClick={openNav}> &#9776;Delete? </button> 
        </div>
    </div>
    )
}

const rooms = [
    "Calculus",
    "Derivatives",
    "Big O Notation"
]

export default SideBar;