const GroceryItem = (props) =>{
 return(
    <div>
        <p> Item : {props.eachitem.item} </p>
        <p> Brand :{props.eachitem.brand}</p>
        <p> Units :{props.eachitem.units}</p>
        <p> Quantity :{props.eachitem.quantity}</p>
        <p> isPurchased : {props.eachitem.isPurchased + ""}</p>
    </div>
 )

}

export default GroceryItem