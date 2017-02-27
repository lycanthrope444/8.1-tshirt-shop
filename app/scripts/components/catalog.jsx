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
        Login Button
      </div>
    )
  }
}

// class ShirtMenu extends React.Component{
//   constructor(){
//     super();
//
//   }
//   render(){
//     // var shortList = this.props.data.shirtMenu.toJSON();
//     // console.log(shortList);
//     // var MenuItems = shortList.map((shirt, index)=>{
//     //   return(
//     //     <div className="col-sm-6 col-md-4" key={index}>
//     //       <div className="thumbnail">
//     //         <img src={shirt.picture} />
//     //         <div className="caption">
//     //           <h3>{shirt.name}</h3>
//     //           <p>{shirt.description}</p>
//     //           <p>
//     //             <a href="#"
//     //               onClick={(e)=>{e.preventDefault(); this.props.addItem(shirt)}}
//     //               className="btn btn-primary"
//     //               role="button">
//     //               Buy</a>
//     //
//     //           </p>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   )
//     // });
//     return(
//
//       <div>
//         {MenuItems}
//       </div>
//     )
//   }
// }

module.exports = CatalogView;
