import React, { Component } from 'react';

class Stopwatch extends Component {

    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0, 
    };

    handleStopwatch = () => {
        this.setState( prevState => ({
            isRunning: !prevState.isRunning
        }));
        if (!this.state.isRunning) {
            this.setState({ previousTime: Date.now() });
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 100)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }  

    handleReset = () => {
        this.setState({ elapsedTime: 0 })
    }

    tick = () => {
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState( prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
            }));
        }
    }
    render() {
        const seconds = Math.floor(this.state.elapsedTime / 1000);

        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
        <span className="stopwatch-time">{ seconds }</span>
                <button onClick={this.handleStopwatch}> { this.state.isRunning ? 'Stop' : 'start' } </button>
                <button onClick={this.handleReset}>Reset</button>
            </div>   

        );
    }
}

export default Stopwatch;