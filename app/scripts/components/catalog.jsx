var React = require('react');

var models = require('../models/models');

class CatalogView extends React.Component{
  render(){
    return(
      <div>
        <NavBar />
        
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

module.exports = CatalogView;
