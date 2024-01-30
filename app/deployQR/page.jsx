/* :: DEPLOY :: */
'use client'
import Link from 'next/link';
import {QRCodeSVG} from 'qrcode.react';
import './deploy.css';

export default function Deploy() {     

    return (<>
    <header>
        <Link 
        href='/'
        className='home'
        scroll={false}
        >
        Deploy
        </Link>
    </header>
    <main>
        <div className='qr_wrap'>
        <QRCodeSVG 
        value="/remoteScreen" 
        className='qr_code'
        />
        </div>
        <br></br>
        <div>
        <Link
        className='home'
        href='/remoteScreen'
        target='_blank'
        >remote screen</Link>
        </div>
    </main>
      </>)
  }
  
