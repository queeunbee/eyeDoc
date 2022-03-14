import './App.css';
import React from 'react';
import {Howl} from 'howler';
import elegant from './elegant.mp3'


function PlaySound() {

    const soundSrc = elegant;

    const callMySound = (src) => {
        const sound = new Howl({
            src,
            html5: true
        });
        sound.play()
    }

    return(
        <div> 
        <div>playSound </div>
        
        <div onClick={ () => callMySound(soundSrc)} >Click me to play sound</div></div>

    )
}

export default PlaySound;