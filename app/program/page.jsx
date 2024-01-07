'use client'

import { ReactP5Wrapper } from "@p5-wrapper/react";
import React, { useEffect, useState } from "react";
import Analyser from '../soundAnalyser/page.jsx'
import './programOne.css'


function sketchColorBar(p5) {

  let rotation = 0;
  let color = 140;
  let brightness = 0;

  const cvsWidth = 1200;
  const cvsHeight = 600;

  p5.setup = () => p5.createCanvas(cvsWidth, cvsHeight, p5.WEBGL);

  p5.updateWithProps = props => {
    if (props.rotation) {
      rotation = (props.rotation * Math.PI) / 180;
    }
    if (props.color) {
      color = props.color;
      console.log("color: ",color)
    }
    if (props.brightness) {
      brightness = props.brightness;
      console.log("color: ",brightness)
    }
  };
   
  p5.draw = () => {

    p5.push();
    p5.translate(10, 5, 0);
    p5.ambientLight(brightness -20, brightness -20, brightness -20);
    p5.pointLight(color, 100, brightness -40, 200, 200, 15);
    p5.background(`hsl(${color}, 100%, ${brightness}%)`);
    p5.specularMaterial('white');
    p5.noStroke();
    p5.push();
    p5.rotateX(rotation);
    p5.box(cvsWidth, 100);
    p5.pop();

  };
}


export default function App() {

  const [rotation, setRotation] = useState(0);
  const[color, setColor] = useState(0);
  const[brightness, setBrightness] = useState(0);

    function handleColor(e){
        setColor(e.target.value)
    }
    function handleBrightness(e){
      setBrightness(e.target.value)
    }

   useEffect(() => {

    const interval = setInterval(
      () => setRotation((rotation) => rotation + 10),
      120
    );
    

    return () => {

    clearInterval(interval);
    };

  }, []);  


  return (<>
    <div>
    <ReactP5Wrapper 
    sketch={sketchColorBar} 
    rotation={rotation} 
    color={color}
    brightness={brightness}
    />
    </div>
    <br></br>
    <section className="controls">
    <label>
    background color
    <input
    className='slider'
    type='range'
    min='0'
    max='355'
    step='5'
    value={color}
    onChange={(e)=>handleColor(e)}
    />
    </label>
    <br></br>
    <label>
    brightness
    <input
    className='slider'
    type='range'
    min='0'
    max='100'
    step='5'
    value={brightness}
    onChange={(e)=>handleBrightness(e)}
    />
    </label>
    </section>
  </>);
}