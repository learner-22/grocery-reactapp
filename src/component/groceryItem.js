const styles ={
  divStyle :{
    height : 'auto',
    width :'300px',
    border :'grey 2px solid',
    margin : '20px',
    padding : '10px',
    backgroundColor : 'lightgrey',
    textAlign :'left',
    color :'maroon'

  },
  div1Style :{
    height : 'auto',
    width :'300px',
    border :'grey 2px solid',
    margin : '20px',
    padding : '10px',
    backgroundColor : 'lightgrey',
    textAlign :'left',
    color :'blue'

  }
}

const GroceryItem = (props) =>{
 
    return(
    <div style = {styles.divStyle}>
        <p> Item : {props.eachitem.item} </p>
        <p> Brand :{props.eachitem.brand}</p>
        <p> Units :{props.eachitem.units}</p>
        <p> Quantity :{props.eachitem.quantity}</p>
        <p> isPurchased : {props.eachitem.isPurchased + ""}</p>
        <button onClick={() => {{props.eachitem.isPurchased = true} ; props.remove(props.eachitem)}} > Remove </button>
        
    </div>
 
 )

}


export default GroceryItem