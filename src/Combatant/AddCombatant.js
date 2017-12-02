import React, { Component } from 'react';
import fighters from "./FighterList.js";

export default class Fighter extends Component {
  constructor() {
    super();
  }

  addFruit(fruit) {
    var timestamp = (new Date()).getTime();
    this.state.fruits['fruit-' + timestamp] = fruit;
    this.setState({fruits: this.state.fruits});
  }
  render(){
    return (
      <div className="component-wrapper">
          <fruitList fruits={this.state.fruits}/>
          <AddFruitFrom addFruit={this.addFruit} />
      </div>
    );
  }

  var AddFruitFrom = new fighter ({
    createFruit : function(e) {
      e.preventDefault();
      var fruit = this.refs.fruitName.value;
    }
  })

  buildTable(arr) {
    var fighterList = document.getElementById("fighterList");

    fighterList.append('<input>')

  };

render() {
  return (
    <div>
      <ul id="fighterList">
        <li>list1</li>
        <li>list2</li>
      </ul>
      <button onClick={e => this.buildTable(fighters)}>click</button>
    </div>
  );
}
}
