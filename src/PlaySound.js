import './App.css';
import React from 'react';
import { Howl } from 'howler';
import elegant from './music/elegant.mp3';
import badum from './music/badum.mp3';
import bubbly from './music/bubbly.mp3';
import hey from './music/hey.mp3';
import impressed from './music/impressed.mp3';
import { useContext, useState, useEffect, useRef } from 'react';
import Select from 'react-select';

function PlaySound() {
  const options = [
    { value: badum, label: 'ba-dum' },
    { value: bubbly, label: 'bubbly' },
    { value: elegant, label: 'elegant' },
    { value: hey, label: 'hey' },
    { value: impressed, label: 'impressed' },
  ];

  //   const soundSrc = elegant;
  const [selectedSound, setSelectedSound] = useState(elegant);

  const callMySound = (src) => {
    const soundd = new Howl({
      src,
      html5: true,
    });
    soundd.play();
  };
//   console.log('this.state-->', selectedSound);

  return (
    <div>

      <div className='dropdown'>
        <Select
          defaultValue={selectedSound}
          onChange={setSelectedSound}
          options={options}
        />

        <button
          className='button button1'
          onClick={() => callMySound(selectedSound.value || selectedSound)}
        >
          play sound
        </button>
      </div>
    </div>
  );
}

export default PlaySound;
