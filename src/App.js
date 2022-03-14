import './App.css';
import ProgressBar from './ProgressBar';

import Settings from './Settings';
import { useState } from 'react';
import SettingsContext from './SettingsContext';

import windyForest from './music/windyForest.mp3';

function App() {

  const [workMinutes, setWorkMinutes] = useState(20);
  const [breakMinutes, setBreakMinutes] = useState(20);
  const [selectedSound, setSelectedSound] = useState(windyForest);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main>
      <SettingsContext.Provider
        value={{
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
          selectedSound,
          setSelectedSound,
          isPlaying,
          setIsPlaying
        }}
      >
      <Settings/>
        <ProgressBar />
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
