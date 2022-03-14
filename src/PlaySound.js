import './App.css';
import React from 'react';
import ReactHowler from 'react-howler/lib/ReactHowler';
import campFire from './music/campFire.mp3';
import lakeWaves from './music/lakeWaves.mp3';
import rainOnRoof from './music/rainOnRoof.mp3';
import scrapingIce from './music/scrapingIce.mp3';
import windyForest from './music/windyForest.mp3';

import { useContext } from 'react';
import Select from 'react-select';
import SettingsContext from './SettingsContext';

function PlaySound() {
  const options = [
    { value: campFire, label: 'campfire' },
    { value: lakeWaves, label: 'lake waves' },
    { value: rainOnRoof, label: 'rain on the roof' },
    { value: scrapingIce, label: 'scrapingIce' },
    { value: windyForest, label: 'windyForest' },
  ];

  const settingsInfo = useContext(SettingsContext);
  const selectedSound = settingsInfo.selectedSound;
  const setSelectedSound = settingsInfo.setSelectedSound;

  const isPlaying = settingsInfo.isPlaying;
  const setIsPlaying = settingsInfo.setIsPlaying;

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div>
      <div className='dropdown'>
        <Select
          defaultValue={selectedSound}
          onChange={setSelectedSound}
          options={options}
          className='select'
          id='element1'
        />
        <div id='element2'>
          <ReactHowler
            src={selectedSound.value || selectedSound}
            playing={isPlaying}
          />
          {isPlaying === false ? (
            <button
              className='button button1'
              onClick={() => {
                handlePlay();
              }}
            >
              Play
            </button>
          ) : (
            <button
              className='button button1'
              onClick={() => {
                handlePause();
              }}
            >
              Pause
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlaySound;
