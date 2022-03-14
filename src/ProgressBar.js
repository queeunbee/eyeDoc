import ReactProgressMeter from 'react-progress-meter';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from './SettingsContext';
import { Howl } from 'howler';
import ReactHowler from 'react-howler/lib/ReactHowler';
import PlaySound from './PlaySound';

function ProgressBar() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState('work');
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  const selectedSound = settingsInfo.selectedSound;

  // console.log(selectedSound);
  // console.log(settingsInfo.selectedSound)
 

  const callMySound = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work';
      const nextSeconds =
        nextMode === 'work'
          ? settingsInfo.workMinutes * 60
          : settingsInfo.breakMinutes;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        callMySound(selectedSound)
        // <ReactHowler
        // src={selectedSound.value || selectedSound}
      // />

        return switchMode();
      }

      tick();
    }, 100);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds =
    mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds === 0) seconds = '0' + seconds;

  return (
    <div>
      <h3 className='timerLabelAbove'>✨ {mode} mode ✨ </h3>
      <ReactProgressMeter
        currentProgress={percentage}
        showPercent={false}
        show={true}
        color={mode === 'work' ? 'cyan' : 'lime'}
        width='100%'
      />

      <h3 className='timerLabel'>Time Left {`${minutes}:${seconds}`}</h3>

      <div style={{ marginTop: '20px' }}>
        {isPaused ? (
          <PlayButton
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}
      </div>
      <PlaySound />
    </div>
  );
}

export default ProgressBar;
