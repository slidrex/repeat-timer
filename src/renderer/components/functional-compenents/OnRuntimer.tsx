import React from 'react';

class OnRuntimer extends React.Component<{ stopTimer: any, restartTimer: any, repeatTimer:any }> {
    render() {
        let {stopTimer, restartTimer, repeatTimer} = this.props;
        return (
            <div>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={repeatTimer}>Repeat</button>

            </div>
        );
    }
}

export default OnRuntimer;