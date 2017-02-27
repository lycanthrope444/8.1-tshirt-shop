var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var Cart = require('./components/cart.jsx');
var Catalog = require('./components/catalog.jsx');

var AppRouter = Backbone.Router.extend({
  routes:{
    '':'index',
    'shirts':'index',
    'cart':'cart'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(Catalog),
      document.getElementById('app')
    );
  },
  cart:function(){
    ReactDOM.render(
      React.createElement(Cart),
      document.getElementById('app')
    );
  }
});

var appRouter = new AppRouter();

module.exports = appRouter;
