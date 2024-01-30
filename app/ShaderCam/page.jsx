/* p5JS shader Webcam https://p5js.org/examples/3d-shader-using-webcam.html */
import { ReactP5Wrapper } from "@p5-wrapper/react";
import './shader_cam.css';



function sketchCam(p5) {

// this variable will hold our shader object
let theShader;
// this variable will hold our webcam video
let cam;

  p5.preload = () => {
    // load the shader
    theShader = p5.loadShader('assets/webcam.vert', 'assets/webcam.frag');
  }


  p5.draw = () => {
    // shaders require WEBGL mode to work
    p5.createCanvas(710, 400, WEBGL);
    p5.noStroke();
  
    cam = p5.createCapture(VIDEO);
    cam.size(710, 400);
  
    cam.hide();
  }
  
  p5.draw = () => {
    // shader() sets the active shader with our shader
    p5.shader(theShader);
  
    // passing cam as a texture
    theShader.setUniform('tex0', cam);
  
    // rect gives us some geometry on the screen
    p5.rect(0,0,width,height);
  }
  

}


export default function ShaderCam() {     

    return (<>
    <header>
        <Link 
        href='/'
        className='home'
        scroll={false}
        >
            Home
        </Link>
    </header>
    <main>
    <div>
    <ReactP5Wrapper 
    />
    </div>
    </main>
      </>)
  }
  




