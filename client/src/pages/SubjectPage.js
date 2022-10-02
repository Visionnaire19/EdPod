import React, { useEffect, useState } from 'react';
import './SubjectPage.css';
import Header from '../components/SubjectHeader'
import {randomNumberInRange, get, post} from '../utils'
import { Noise } from 'noisejs';
import '../utils.css'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  

  
  
const CANVAS_WIDTH = getWindowDimensions.width;

const NOISE_AMOUNT = 5;
const NOISE_SPEED = 0.004;
const SCROLL_SPEED = 0.05;

const noise = new Noise();

const SubjectPage = (props) =>{
  const [links, setLinks] = useState([])
  const [rooms, setRooms] = useState([])
  const [empty, setEmpty] = useState(true)
  let subject = props.SubjectName;

  
  

  //Will ultimately only get the people in the same institution as the person connected
  let body = { topic: subject}
  console.log(links.length)
  useEffect(() => {
    let tempLinks = []
    let tempRooms = []
    get("/api/pods",body).then((pods) => {
      for(let i=0; i<pods.length; i++){
        tempLinks.push(pods[i].link)
        tempRooms.push(pods[i].name)
      }
      setLinks(tempLinks)
      setRooms(tempRooms)
     
    });
  },[]);

 
  


  const positions = rooms.map(
    (name) => {
        return { s: 1.0, x: randomNumberInRange(100,getWindowDimensions().width-200), y:randomNumberInRange(40,400), name: name} 
    });

    
    //Creating a new pod
  const newPod = (body) =>{
        post("/api/newPod", body).then((res) =>{

        });
      }

    const animationRef = React.useRef();
    const bubblesRef = React.useRef(
        positions.map((bubble) => ({
        ...bubble,
        noiseSeedX: Math.floor(Math.random() * 64000),
        noiseSeedY: Math.floor(Math.random() * 64000),
        xWithNoise: bubble.x,
        yWithNoise: bubble.y,
        })),
    );
    const [isReady, setReady] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
          setReady(true);
        }, 200);
    
        animationRef.current = requestAnimationFrame(animate);
    
        return () => {
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
        };
      }, []);

      function animate() {
        bubblesRef.current = bubblesRef.current.map((bubble, index) => {
            var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
            var random = 1 * plusOrMinus; 
            const newNoiseSeedX = bubble.noiseSeedX + NOISE_SPEED;
            const newNoiseSeedY = bubble.noiseSeedY + NOISE_SPEED;
    
          const randomX = noise.simplex2(newNoiseSeedX, 0);
          const randomY = noise.simplex2(newNoiseSeedY, 0);
    
          const newX = bubble.x + random * SCROLL_SPEED;
          const newY = bubble.y + random * SCROLL_SPEED;
    
          const newXWithNoise = newX + randomX * NOISE_AMOUNT;
          const newYWithNoise = newY + randomY * NOISE_AMOUNT;
    
          const element = document.getElementById(`bubble-${index}`);
    
          if (element) {
            element.style.transform = `translate(${newXWithNoise}px, ${newYWithNoise}px) scale(${bubble.s})`;
          }
    
          return {
            ...bubble,
            noiseSeedX: newNoiseSeedX,
            noiseSeedY: newNoiseSeedY,
            x: newX < -200 ? CANVAS_WIDTH : newX,
            xWithNoise: newXWithNoise,
            yWithNoise: newYWithNoise,
          };
        });
    
        animationRef.current = requestAnimationFrame(animate);
      }

      function collectData() {
        let topic = prompt("Pleaser enter the topic you wish to study: ");
        let meetingLink = prompt("Please enter the meeting link: ");

        console.log(topic + meetingLink);

        const body = {name: topic, link: meetingLink, topic: subject}
        newPod(body);


      }
 


    return(
       <div> 
            <Header SubjectName = {subject}></Header>
       <div className="bubbles-wrapper">
       
       <div className="bubbles">
        {positions.map((bubble, index) => (
           <a className = "u-removeLinkLine" href={links[index]} target="_blank">
          <div className="bubble"
          
            id={`bubble-${index}`}
            key={`${bubble.x} ${bubble.y}`}
            style={{
              opacity: isReady ? 1 : 0,
              transform: `translate(${bubble.x}px, ${bubble.y}px) scale(${bubble.s})`,
            }}
            
           >
            <h3>{bubble.name}</h3>
          </div>
          </a>
          
        ))}
      </div>
    </div>
    <div>
      <button onClick = {collectData}>New Pod</button>
    </div>
        </div>

       
    );
};

export default SubjectPage





