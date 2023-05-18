import React from "react";
import CartItem from "./CartItem";      

class Cart extends React.Component{
    constructor(){
        super();
        this.state =
        {
            products:
            [
                { title:'Mobile phone',
                price:999,
                qty:1,
                img:'',
                id:1
               },
                { title:'Watch',
                price:99,
                qty:1,
                img:'',
                id:2},
                { title:'Ball',
                price:500,
                qty:2,
                img:'', 
                id:2}
            ]
          //this.increaseQuantity=this.increaseQuantity.bind(this);
    
        }
        }
      
    render() { 
        const { products }=  this.state;
    return( 
            <div className="cart">
    
             {
               products.map((product)=> {  
                return <CartItem 
                product={product} 
                key={product.id}
                />
            })}
            </div>
           );
             }
        
 }
         
 
 
 export default Cart; 
                
                
              