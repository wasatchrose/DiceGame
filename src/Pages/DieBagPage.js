import React from 'react';
import "./DieBagPage.css";
import DieComponent from "../Components/DieComponent";

class DieBagPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newSides:'',
            diceList: [6, 12, 20],
        }
        this.handleAdd = this.handleAdd.bind(this); 
        this.handleSidesInputChange = this.handleSidesInputChange.bind(this);
    }

    handleAdd() {
        const newDiceList = this.state.diceList.concat(this.state.newSides);
        this.setState({ 
            diceList: newDiceList
        });
console.log(this.state.diceList);
console.log(newDiceList);
console.log(this.state.newSides);

    } 

    handleSidesInputChange(event){
        const newValue = event.target.value;
        this.setState({newSides: newValue});
    }

    createDiceListElements() {
        return this.state.diceList.map((sides, index) => {
            const item = {
                sides,
                index
            };
            return <DieComponent sides={item.sides} key={item.index} />;  
        });
    }

     render() {
        return (
        <div className="diebagpage">
            <h1>Marilynn's Dice Bag</h1>
            <div className="adddiecontainer">
                
            <label>Number of Sides</label>
            <input type="text" className="sideInput"
                       value={ this.state.newSides } 
                       onChange={ this.handleSidesInputChange }
            />
            <button  onClick={this.handleAdd}>Add</button>
            </div>

             <div>
                { this.createDiceListElements() }
            </div>
        </div>
   );
}
}

export default DieBagPage;
