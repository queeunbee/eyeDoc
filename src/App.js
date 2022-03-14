import './App.css';
import ProgressBar from './ProgressBar';
import Settings from './Settings';
import { useState } from 'react';
import SettingsContext from './SettingsContext';

function App() {
  // const [showSettings, setShowSettings] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(20);
  const [breakMinutes, setBreakMinutes] = useState(20);

  return (
    <main>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
      <Settings/>
        <ProgressBar />
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
