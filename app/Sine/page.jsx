/*:: SINE https://p5js.org/examples/3d-sine-cosine-in-3d.html */
'use client'
import { ReactP5Wrapper } from "@p5-wrapper/react";
import './sine.css';


function Sine(p5){

p5.setup =()=> {p5.createCanvas(1200, 900, p5.WEBGL);}

p5.draw = ()=> {

    let button = p5.createButton('click me');
    button.position(0, 100);
  
    button.mousePressed(() => {
        let c = p5.random(['red', 'green', 'blue', 'yellow']);
        p5.background(c);
    });

   
    p5.rotateY(p5.frameCount * 0.01);
  
    for (let j = 0; j < 50; j++) {

      p5.push();
   //for (let i = 0; i < 120; i++) {
        p5.translate(
          p5.sin(p5.frameCount * 0.0001 + j) * 100,
          p5.sin(p5.frameCount * 0.001 + j) * 100,)
         // i * 0.1
        //); 
        p5.rotateZ(p5.frameCount * 0.001);
        p5.push();
        p5.stroke('green');
        p5.strokeWeight(0.01);
        p5.fill('white');
       // p5.sphere(18, 61, 42);
        p5.plane(20)
        p5.ambientLight('blue');
        p5.pop();
      }
      p5.pop();
    }
}
//}
  

export default function SineRun() {
  
 return (<>
    <main>
    <div>
      <ReactP5Wrapper 
      sketch={Sine} 
      />
      </div>
    </main>
    </>);
}