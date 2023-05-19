import React from "react";

   const CartItem =(props)=>{
    const {title,price,qty,img}=props.product;
    const {
     product,
     onIncreaseQuantity,
     onDecreaseQuantity,
     onDeleteQuantity
    } =props;
    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={img}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>Rs{price}</div>
                <div style={{color:'#777'}}>Qty:{qty}</div>
                <div className="cart-item-actions">
                    {/*buttons*/}
                    <img 
                    alt="increase" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                    onClick={ ()=> onIncreaseQuantity(product)}
                    />
                    <img 
                    alt="decrease" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                    onClick={ ()=> onDecreaseQuantity(product)}
                    />
                    <img 
                    alt="delete" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                    onClick={ ()=> onDeleteQuantity(product.id)}
                    />

                </div>
            </div>

        </div>
    );
}

const styles={
image:{
    height:110,
    width:110,
    borderRadius:4,
    background:'#ccc'
    
}
}
export default CartItem;

    

      
        

       

    // increaseQuantity=()=>{
        
    // //     console.log('this',this.state);
    // //   setState form 1
    // //   this.setState({
    // //         qty:this.state.qty += 1
    // //    },()=>{
    //     // console.log('this.state',this.state)}
    //     // );
    // //   setState form 2
    // this.setState((prevState)=>{
    //     return{ qty:prevState.qty += 1}
    //  } );
     
    
    // }
    // decreaseQuantity=()=>{     
    //     const { qty } = this.state;
            
    //         if(qty === 0){
    //             return;
    //         }
    //         this.setState((prevState)=>{
    //             return{ qty:prevState.qty -= 1}
    //          } );
    
    //     }