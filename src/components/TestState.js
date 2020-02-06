import React, { Component } from 'react';

class TestState extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }

    timesFive (e) {
        this.setState({ value: e.target.value * 5 })
    }


    render() {
        return(
            <div>
                <input
                    type="number"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Number to times five"
                />
                <button onClick={() => this.timesFive()}>Times Five</button>
            </div>
        );
    }
}

export default TestState;