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
        Nav Bar
      </div>
    )
  }
}


module.exports = CartView;
