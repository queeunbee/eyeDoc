import './App.css';
import React from 'react';
import { Howl } from 'howler';
import elegant from './music/elegant.mp3';
import badum from './music/badum.mp3';
import bubbly from './music/bubbly.mp3';
import hey from './music/hey.mp3';
import impressed from './music/impressed.mp3';
import { useContext} from 'react';
import Select from 'react-select';
import SettingsContext from './SettingsContext';

function PlaySound() {
  const options = [
    { value: badum, label: 'ba-dum' },
    { value: bubbly, label: 'bubbly' },
    { value: elegant, label: 'elegant' },
    { value: hey, label: 'hey' },
    { value: impressed, label: 'impressed' },
  ];

const settingsInfo = useContext(SettingsContext);
const selectedSound = settingsInfo.selectedSound;
const setSelectedSound = settingsInfo.setSelectedSound;

  const callMySound = (src) => {
    const soundd = new Howl({
      src,
      html5: true,
    });
    soundd.play();
  };

  return (
    <div>

      <div className='dropdown'>
        <Select
          defaultValue={selectedSound}
          onChange={setSelectedSound}
          options={options}
          className = 'select'
          id= "element1"
        />

        <button
          className='button button1'
          onClick={() => callMySound(selectedSound.value || selectedSound)}
          id= "element2"
        >
          play sound
        </button>
      </div>
    </div>
  );
}

export default PlaySound;
