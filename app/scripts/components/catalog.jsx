var React = require('react');

var models = require('../models/models');

class CatalogView extends React.Component{
  constructor(){
    super();
    var orderData = JSON.parse(localStorage.getItem('Order'));
    var order = new models.Order(orderData);
    var shirtMenu = new models.ShirtCollection();
    var menu = [
      {name: 't-shirt', price: 5, description: "A good short sleeved t-shirt", picture: 'http://www.promozionale.net/images/3100001_EX.jpg'},
      {name: 'long-sleeve t-shirt', price: 8,description: "A good long sleeved t-shirt", picture: 'https://ultrapress-production.s3.amazonaws.com/media/product_inventory/31/bb6150b9-2cf5-48af-950d-bf9597f7ba91.jpg'},
      {name: 'tank-top', price: 5, description: "A good no sleeved t-shirt", picture: 'http://wheeliejuice.com/wp-content/uploads/2016/02/black-tank-top.jpg'}
    ];
    shirtMenu.add(menu);

    this.state = {
      shirtMenu: shirtMenu,
      order: order
    }
  }
  addItem(shirt){
    console.log(this.state.order);
    var order = this.state.order;
    var orderItem = shirt;
    order.get('items').add(orderItem);

    localStorage.setItem('Order', JSON.stringify(order.toJSON()));

    this.setState({order});
  }
  render(){
    //Shirt List
    var shortList = this.state.shirtMenu.toJSON();
    var MenuItems = shortList.map((shirt, index)=>{
      return(
        <div className="col-sm-6 col-md-4" key={index}>
          <div className="thumbnail">
            <img src={shirt.picture} />
            <div className="caption">
              <h3>{shirt.name}</h3>
              <p>{shirt.description}</p>
              <p>
                <a href="#"
                  onClick={(e)=>{e.preventDefault(); this.addItem(shirt)}}
                  className="btn btn-primary"
                  role="button">
                  Buy</a>

              </p>
            </div>
          </div>
        </div>
      )
    });
    //Order List
    return(
      <div>
        <NavBar username={this.state}/>
        <div>
          {MenuItems}
        </div>


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
        <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
          Launch demo modal
        </button>
        <div className="modal fade" tabIndex="-1" role="dialog" id="myModal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Modal title</h4>
              </div>
              <div className="modal-body">
                <p>One fine body&hellip;</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = CatalogView;
