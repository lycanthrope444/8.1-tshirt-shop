var React = require('react');

var models = require('../models/models');

class CartView extends React.Component{
  constructor(){
    super();
    var orderData = JSON.parse(localStorage.getItem('Order'));
    var order = new models.Order(orderData);
    this.state = {
      order: order
    }
  }
  render(){
    var orderList = this.state.order.get('items').map((item, index)=> {
      return (
        <li key={index}>
          {item.get('name')}
          {item.get('price')}
        </li>
      )
    })
    return(
      <div>
        <NavBar />
        <ul>
          {orderList}
        </ul>
      </div>
    )
  }
}

class NavBar extends React.Component{
  render(){
    return(
      <div>
        <div>
          Very Good Shirts
        </div>
        <a href="#shirts">
          <div>
            Shirts
          </div>
        </a>
        <a href="#cart">
          <div>
            Cart
          </div>
        </a>
      </div>
    )
  }
}


module.exports = CartView;
