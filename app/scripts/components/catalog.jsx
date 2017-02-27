var React = require('react');

var models = require('../models/models');

class CatalogView extends React.Component{
  constructor(){
    super();
    var shirtMenu = new models.ShirtCollection();
    var menu = [
      {name: 't-shirt', sleeves: 'short'},
      {name: 'long-sleeve t-shirt', sleeves: 'long'},
      {name: 'tank-top', sleeves: 'none'}
    ];
    shirtMenu.add(menu);
    this.state = {
      shirtMenu: shirtMenu
    }
  }
  render(){
    console.log(this.state);
    return(
      <div>
        <NavBar username={this.state}/>
        <ShirtMenu data={this.state}/>

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
        <LogIn />
      </div>
    )
  }
}

class LogIn extends React.Component{
  render(){
    return (
      <div>
        Login Button
      </div>
    )
  }
}

class ShirtMenu extends React.Component{
  render(){
    return(
      <div>
        Shirt Menu
      </div>
    )
  }
}

module.exports = CatalogView;
