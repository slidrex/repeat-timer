import React, {useState, useEffect} from 'react';
import './App.css';
import NotificationField from "./components/fields/NotificationField";
import CountdownTimer from "./components/timer/CountdownTimer";
import TimerActions from "./components/functional-compenents/TimerActions";
import {Simulate} from "react-dom/test-utils";
import mouseMove = Simulate.mouseMove;

const { ipcRenderer } = window.require('electron');

function App() {
  const [constMinutes, setConstMinutes ] = useState(0);
  const [constHours, setConstHours] = useState(0);
  const [constSeconds, setConstSeconds] = useState(0);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [enabledAutoRestart, setAutoRestart] = useState(false);
  // End of Time
  function restart(restart:boolean) {
    setMinutes(constMinutes);
    setIsRunning(!restart);
    setSeconds(constSeconds);
    setMilliseconds(0);
    setHours(constHours);
  }
  function setCHours(hours:number){
    setConstHours(hours);
    setHours(hours);
  }
  function setCMinutes(minutes:number){
    setConstMinutes(minutes);
    setMinutes(minutes);
  }
  function setCSeconds(seconds:number){
    setConstSeconds(seconds);
    setSeconds(seconds);
  }
  function onFinish(){
    restart(!enabledAutoRestart);
    sendNotificationRequest();
  }
  function sendNotificationRequest() {
    ipcRenderer.send('notification', 'Hello from renderer process');

  }

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        if (milliseconds > 0) {
          setMilliseconds((milliseconds) => milliseconds - 1);
        } else if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
          setMilliseconds(99);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
          setMilliseconds(99);
        } else if (hours > 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
          setMilliseconds(99);
        }
        else{
          onFinish();
        }
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, hours, minutes, seconds, milliseconds]);

  return (
      <div className="App">
        <NotificationField />
        <CountdownTimer setConstHours={setCHours} setConstMinutes={setCMinutes} setConstSeconds={setCSeconds} getSeconds={seconds} setHours={setHours} setMinutes={setMinutes} getHours={hours} setSeconds={setSeconds} getMinutes={minutes} />
        <TimerActions enabledAutoRestart={enabledAutoRestart} setAutoRestart={setAutoRestart} repeatTimer={() => restart(false)} isRunning={isRunning} restartTimer={() => restart(true)} stopTimer={() => setIsRunning(false)} startTimer={() => setIsRunning(true)} />
      </div>
  );
}
  export default App;
