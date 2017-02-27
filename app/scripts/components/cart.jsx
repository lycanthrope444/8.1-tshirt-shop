var React = require('react');

class CartView extends React.Component{
  render(){
    return(
      <div>
        <NavBar />
        Cart Holder
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
