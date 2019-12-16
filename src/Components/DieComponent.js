import React from 'react';
import "./DieComponent.css";

class DieComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            result: "",
            
        }
        this.handleRoll = this.handleRoll.bind(this); 
    }

    handleRoll() {
        const rand = Math.floor(Math.random() * this.props.sides) + 1;  // returns a random integer from 1 to 10
        this.setState({
            result: rand
        })
    } 

    render() {
        return (
        <div className="diecontainer">
                <div>D{this.props.sides}</div>
                <button onClick={this.handleRoll}>Roll-it</button>
                <div>Result: {this.state.result}</div>
            </div>
            );
        }
    }
    
    export default DieComponent;
