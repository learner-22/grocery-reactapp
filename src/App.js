
import './App.css';
import groceryData from './data/groceryData'
import {Component} from "react"
import GroceryList from './component/groceryList'

class App extends Component {
  render(){
    return (
    <div className="App">
      <h1> Grocery List</h1>
      <GroceryList groceryData ={groceryData} />
    </div>
  );
  }
}

export default App;
