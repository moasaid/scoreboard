import React, { Component } from 'react';

class TestState extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }

    handleFive = (e) => {
        this.setState({ //set state is used to update the
            value: e.target.value
        })
    }

   handleSubmit = (e) => {
        e.preventDefault();
   }


    render() {
        return(
            <div>
                <form>
                    <input
                        type="number"
                        value={this.state.value}
                        onChange={this.handleFive}
                        placeholder="Number to times five"
                    />
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
                <p>{this.state.value}</p>
            </div>
        );
    }
}

export default TestState;