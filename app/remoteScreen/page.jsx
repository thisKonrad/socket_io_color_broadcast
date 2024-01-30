/* :::: REMOTE SCREEN :::: */
'use client'
import { useState, useEffect } from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import {io} from 'socket.io-client';
import './remote_screen.css';


/* connect your server: */
const socket = io.connect('http://localhost:5500');


function sketchRemote(p5) {

    let color = 240;
    let brightness = 20;
  
    const cvsWidth = window.innerWidth;
    const cvsHeight = window.innerHeight;
  
    p5.setup = () => p5.createCanvas(cvsWidth, cvsHeight, p5.WEBGL);
  
    p5.updateWithProps = props => {

      if (props.color) {
        color = props.color;
      }
      if (props.brightness) {
        brightness = props.brightness;
      }
    };
     
    p5.draw = () => {
  
      p5.push();
      p5.background(`hsl(${color}, 100%, ${brightness}%)`);
      p5.push();
      p5.pop();
  
    };
  }
  
  
  export default function RemoteScreen() {

    const[color, setColor] = useState(0);
    const[brightness, setBrightness] = useState(0);
    
    useEffect(()=>{
      socket.on('send-color-data', (data) =>{
        console.log('color data RemoteScreen:: ',data)
        setColor(data)
      })
      socket.on('send-brightness-data', (data)=>{
        console.log('brightness data RemoteScreen:',data)
        setBrightness(data)
      })
    },[socket]);
    

    console.log('Remote Screen');
    

    return (<>
      <div className='remote_screen'>
      <ReactP5Wrapper 
      sketch={sketchRemote} 
      color={color}
      brightness={brightness} 
      />
      </div>
    </>);
  }