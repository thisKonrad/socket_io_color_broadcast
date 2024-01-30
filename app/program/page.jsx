/* :::: cockpit :::: */
'use client'
import { ReactP5Wrapper } from "@p5-wrapper/react";
import './programOne.css';


function sketchColor(p5) {

  let color = 140;
  let brightness = 0;

  const cvsWidth = 1200;
  const cvsHeight = 600;

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
    p5.translate(10, 5, 0);
    p5.background(`hsl(${color}, 100%, ${brightness}%)`);
    p5.noStroke();
    p5.push();
    p5.pop();

  };
}


export default function App({
  col, 
  bright, 
  onColor, 
  onBrightness}) {

    
  return (<>
    <div>
    <ReactP5Wrapper 
    sketch={sketchColor} 
    color={col}
    brightness={bright}
    />
    </div>
    <br></br>
    <section className="controls">
    <label>
    color
    <input
    className='slider'
    type='range'
    min='0'
    max='355'
    step='5'
    value={col}
    onChange={(e)=>onColor(e)}
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
    value={bright}
    onChange={(e)=>onBrightness(e)}
    />
    </label>
    </section>
  </>);
}