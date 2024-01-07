/* https://editor.p5js.org/cassie/sketches/gpZp_nroq */
'use client'
import { ReactP5Wrapper } from "@p5-wrapper/react";
import React, { useEffect, useState } from "react";
import * as Tone from 'tone'
import './analyser.css'


/*::::::::::::SOUND ::::::::::::::*/

function soundAnalyser(p5){

  const cvsWidth = 40;
  const cvsHeight = 40;

  p5.setup = () => {
    p5.createCanvas(cvsWidth, cvsHeight);
  }
  
  p5.draw = () => {
    p5.background(180);
    //p5.textAlign(CENTER);
  }

  p5.touchStarted = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "4n");
  }

}


export default function Analyser() {

  return (<>
    <div>
    <ReactP5Wrapper 
        sketch={soundAnalyser}
    />
    </div>
  </>);
}