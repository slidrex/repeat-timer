import React from 'react';
import StartTimer from "./StartTimer";
import OnRuntimer from "./OnRuntimer";
import {isReadable} from "node:stream";

class TimerActions extends React.Component<{ startTimer: any, stopTimer: any, restartTimer: any, isRunning: boolean, repeatTimer: any, setAutoRestart: any, enabledAutoRestart:any }> {
    render() {
        let {enabledAutoRestart, setAutoRestart, isRunning, startTimer, stopTimer, restartTimer, repeatTimer} = this.props;
        return (
            <div>
                {
                    !isRunning ? <StartTimer restartTimer={restartTimer} startTimer={startTimer}/>
                        : <OnRuntimer repeatTimer={repeatTimer} stopTimer={stopTimer} restartTimer={restartTimer}/>
                }
                <label>Auto restart</label>
                <input value={enabledAutoRestart} onChange={(e) => setAutoRestart(e.currentTarget.checked) } type="checkbox" id=""/>
            </div>
        );
    }
}

export default TimerActions;