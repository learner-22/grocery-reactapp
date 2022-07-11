
import './App.css';
import groceryData from './data/groceryData'
import {Component} from "react"
import GroceryList from './component/groceryList'

class App extends Component {
   state = {
    groceryData : groceryData,
    item :'',
    brand:'',
    units:'',
    quantity:'',
    isPurchased : false,
    
    }

    handleChange =(event) =>{
      this.setState ({[event.target.id] : event.target.value})
      
    }

    handleSubmit =(event) =>{
      event.preventDefault()
      const newItem = {
        item : this.state.item,
        brand :this.state.brand,
        units: this.state.units,
        quantity : this.state.quantity,
        isPurchased : this.state.isPurchased
      }
      
      this.setState({ 
        groceryData : [newItem ,...this.state.groceryData],
        item : '',
        brand :'',
        units: '',
        quantity : '',
        isPurchased : false,
    
      })
    }

    
    handleRemove =(i) =>{
    
      this.setState(groceryData.map( items => items.item === i.item? items.isPurchased : true))
    }
    
  render(){
   
    return (
    <div className="App">
      <h1> Grocery List</h1>
     
      <form className ="form" onSubmit ={this.handleSubmit}>
      <h2> Add Grocery Item to the List</h2>
        <label htmlFor ="item"> Item Name </label>
        <input type ="text" value = {this.state.item} onChange ={this.handleChange} id ="item" /> 

        <label htmlFor="brand"> Brand Name </label>
        <input type="text" value={this.state.brand} onChange ={this.handleChange} id ="brand" />

        <label htmlFor ="units">Units </label> 
        <input type="text" value={this.state.units} onChange ={this.handleChange} id ="units" />

        <label htmlFor ="quantity">Quantity </label> 
        <input type="number" value={this.state.quantity} onChange ={this.handleChange} id ="quantity" />

        <label htmlFor ="isPurchased">Is Purchased? </label> 
        <input type="text" value={this.state.isPurchased} onChange ={this.handleChange} id ="isPurchased" />

        <input id ='submitButton' type= "submit" />

      </form>
      <GroceryList groceryData ={this.state.groceryData} remove ={this.handleRemove} />
    </div>
  );
  }
}

export default App;
