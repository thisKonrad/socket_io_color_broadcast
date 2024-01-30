/* ::: HOME ::: */
'use client' 
import Link from 'next/link';
import App from './program/page.jsx';
import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import {io} from 'socket.io-client';
import styles from './page.module.css';

/* connect your server: */
const socket = io.connect('http://localhost:5500');


export default function Home() {

  const[color, setColor] = useLocalStorage('color',0)
  const[brightness, setBrightness] = useLocalStorage('bright',0);

    function handleColor(e){
      setColor(e.target.value)
      /* socket io send color to server: */
      socket.emit('color-data', e.target.value)
    }
    function handleBrightness(e){
      setBrightness(e.target.value)
      /* socket io send brightness to server: */
      socket.emit('brightness-data',  e.target.value)
    }
  

   useEffect(() => {

    socket.on('send-brightness-data', (data)=>{
      console.log('brightness data SERVER RECIEVED TEST:',data)
    })

    return () => {

    socket.off('send-brightness-data');

    };

  }, []);  


  return (<>
  <header>
    <h1 className={styles.headline}>Color Broadcast</h1>
  </header>
  <main className={styles.main}>
    <div>
     <Link 
     href='/deployQR' 
     target='_blank'
     scroll={false}
     > 
      <button 
      className={styles.deployBtn}
      >
      deploy
      </button>
      </Link>
    </div>
    <section>
      <App
      col={color}
      bright={brightness}
      onColor={handleColor}
      onBrightness={handleBrightness}
      />
    </section>
  </main>
  </>)
}
