import React from 'react';

class StartTimer extends React.Component<{ startTimer: any, restartTimer: any }> {
    render() {
        let {startTimer, restartTimer} = this.props;
        return (
            <div>
                <button onClick={startTimer}>Start</button>
                <button onClick={restartTimer}>Restart</button>

            </div>
        );
    }
}

export default StartTimer;