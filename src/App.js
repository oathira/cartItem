import React from 'react';
import Cart from './Cart';
import Nav from './Nav';
import * as firebase from 'firebase';

class App extends React.Component {
  constructor(){
    super();
    this.state =
    {
        products:[]
      //this.increaseQuantity=this.increaseQuantity.bind(this);

    }
    }
    handleIncreaseQuantity=(product)=>{
            
            const {products}=this.state;
            const index= products.indexOf(product);
            products[index].qty +=1;
            this.setState({
                products: products
            })
    }
    handleDecreaseQuantity=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty===0)
        {
          return;
      }
      products[index].qty -=1;

      this.setState({
          products
      })

  }
  handleDeleteQuantity=(id)=>{
      const {products}=this.state;
      const items=products.filter((item)=>item.id !== id);
      this.setState({
          products:items
      })

  }
  getCountCart=()=> {
    const {products}=this.state;
    let count=0;
    products.forEach(product => {
      count += product.qty;
      
    });
    return count;

  }
  getTotalPrice=()=>{
    const {products}=this.state;
    let cartTotal=0
    products.map((product)=>{
        cartTotal  += product.qty*product.price;
    })
    return cartTotal;
  }
  render()
  { const { products }=  this.state;
    return (
      <div className="App">
        <Nav count={this.getCountCart()}/>
      
     <Cart
        products={products} 
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteQuantity={this.handleDeleteQuantity}
        />
        <div className="cart-total">TOTAL:{this.getTotalPrice()}</div>
      </div>
      
    );
  }
  
}

export default App;

      
   
    //   { title:'Mobile phone',
    //   price:999,
    //   qty:1,
    //   img:'https://media.istockphoto.com/id/179284565/photo/mobile-phone-samsung.jpg?s=1024x1024&w=is&k=20&c=5AtCZ3cvm3MZ2Y4tFuAj4tRyNzoFquijrzH8zoD7NBc=',
    //   id:1
    //  },
    //   { title:'Watch',
    //   price:99,
    //   qty:1,
    //   img:'https://media.istockphoto.com/id/1368179045/photo/a-silver-stainless-steel-analog-watch.jpg?b=1&s=170667a&w=0&k=20&c=dRs8nww4M4ibLBD1UMUzBYcw13lnk3Z7s0THB9_SM6Y=',
    //   id:2},
    //   { title:'Ball',
    //   price:500,
    //   qty:2,
    //   img:'https://plus.unsplash.com/premium_photo-1676901712467-3d6be41dd17b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb3RiYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', 
    //   id:3}