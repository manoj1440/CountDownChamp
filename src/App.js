import React, {Component} from 'react';
import './App.css';
import Clock from './Clock'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            deadline: "January 26 ,2019",
            newDeadline: ""
        }

        this.changeState = this.changeState.bind(this)
    }


    changeState() {
        this.setState({deadline: this.state.newDeadline})
    }

    render() {
        return (
            <div className="App">
                <div className="Apptitle"> Count Down to {this.state.deadline}</div>

                <Clock deadline={this.state.deadline}/>

                <div>
                    <input placeholder="new date"
                           onChange={event => this.setState({newDeadline: event.target.value})}
                    />
                    <button onClick={() =>
                        this.changeState()}>Submit
                    </button>
                </div>

            </div>
        );
    }
}

export default App;
