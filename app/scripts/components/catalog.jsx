var React = require('react');

var models = require('../models/models');

class CatalogView extends React.Component{
  constructor(){
    super();
    var shirtMenu = new models.ShirtCollection();
    var menu = [
      {name: 't-shirt', sleeves: 'short', picture: 'http://www.promozionale.net/images/3100001_EX.jpg'},
      {name: 'long-sleeve t-shirt', sleeves: 'long', picture: 'https://ultrapress-production.s3.amazonaws.com/media/product_inventory/31/bb6150b9-2cf5-48af-950d-bf9597f7ba91.jpg'},
      {name: 'tank-top', sleeves: 'none', picture: 'http://wheeliejuice.com/wp-content/uploads/2016/02/black-tank-top.jpg'}
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
  constructor(){
    super();

  }
  render(){
    var shortList = this.props.data.shirtMenu.toJSON();
    console.log(shortList);
    var MenuItems = shortList.map((shirt, index)=>{
      return(
        <div className="col-sm-6 col-md-4" key={index}>
          <div className="thumbnail">
            <img src={shirt.picture} />
            <div className="caption">
              <h3>Thumbnail label</h3>
              <p>...</p>
              <p><a href="#" className="btn btn-primary" role="button">Buy</a></p>
            </div>
          </div>
        </div>
      )
    });
    return(

      <div>
        {MenuItems}
      </div>
    )
  }
}

module.exports = CatalogView;
