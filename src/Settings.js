import ReactSlider from 'react-slider';
import './App.css';
import SettingsContext from './SettingsContext';
import {useContext} from 'react';

function Settings() {
    const settingsInfo = useContext(SettingsContext);
  return (
    <div style={{ textAlign: 'left' }}>
      <label>Take a break, every {settingsInfo.workMinutes} minutes</label>
      <ReactSlider
        className={'slider cyan'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        onChange= {newValue => settingsInfo.setWorkMinutes(newValue) }
        min={1}
        max={45}
      />
      <label> Give your eyes a break for {settingsInfo.breakMinutes} seconds</label>
      <ReactSlider
        className={'slider lime'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.breakMinutes}
        onChange= {newValue => settingsInfo.setBreakMinutes(newValue) }
        min={1}
        max={45}
      />
    </div>
  );
}

export default Settings;
 