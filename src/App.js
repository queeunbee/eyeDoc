import './App.css';
import ProgressBar from './ProgressBar';
import PlaySound from './PlaySound';
import Settings from './Settings';
import { useState } from 'react';
import SettingsContext from './SettingsContext';

import elegant from './music/elegant.mp3';
import badum from './music/badum.mp3';
import bubbly from './music/bubbly.mp3';
import hey from './music/hey.mp3';
import impressed from './music/impressed.mp3';

function App() {

  const [workMinutes, setWorkMinutes] = useState(20);
  const [breakMinutes, setBreakMinutes] = useState(20);
  const [selectedSound, setSelectedSound] = useState(elegant);

  return (
    <main>
      <SettingsContext.Provider
        value={{
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
          selectedSound,
          setSelectedSound
        }}
      >
      <Settings/>
        <ProgressBar />
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
