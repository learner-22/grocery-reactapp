import GroceryItem from './groceryItem'

const GroceryList =(props) => {
    
    return(
   
  props.groceryData.map((item,key) => <GroceryItem eachitem ={item } key ={key} />)
    )
    }

export default GroceryList    