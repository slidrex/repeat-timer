import React from 'react';
import './CountdownTimer.css'

class CountdownTimer extends React.Component<{ setMinutes: any, getMinutes: any, setSeconds: any, getSeconds: any, setHours: any, getHours: any, setConstMinutes: any, setConstHours: any, setConstSeconds: any  }> {
    render() {
        let {setConstHours, setConstSeconds, setConstMinutes, setMinutes, getMinutes, setSeconds, getSeconds, setHours, getHours} = this.props;
        return (
            <div>
                <div className="timer-input">
                    <div className="hours time-input">
                        <span>hh</span>
                        <input value={getHours} type="number" name="hours" onChange={(e) => setHours(e.currentTarget.value)} onInput={(e) => setConstHours(e.currentTarget.value)} id=""/>
                    </div>
                    <div className="minutes time-input">
                        <span>mm</span>
                        <input value={getMinutes} type="number" name="minutes" onChange={(e) => setMinutes(e.currentTarget.value)} onInput={(e) => setConstMinutes(e.currentTarget.value)} id=""/>
                    </div>
                    <div className="seconds time-input">
                        <span>ss</span>
                        <input value={getSeconds} type="number" name="seconds" onChange={(e) => setSeconds(e.currentTarget.value)} onInput={(e) => setConstSeconds(e.currentTarget.value)} id=""/>

                    </div>
                </div>

            </div>
        );
    }
}

export default CountdownTimer;