import GroceryItem from './groceryItem'

const GroceryList =(props) => {
  { props.groceryData.sort((a, b) => a.item.localeCompare(b.item))}
  
  return(
   <div>
   
  
  {props.groceryData.map((item,key) =>!item.isPurchased && <GroceryItem eachitem ={item } key ={key} remove = {props.remove} />)}
  </div>
    )
    }

export default GroceryList    