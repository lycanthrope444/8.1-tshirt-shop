var Backbone = require('backbone');
Backbone.LocalStorage = require('backbone.localstorage');

var ShirtModel = Backbone.Model.extend({

});

var ShirtCollection = Backbone.Collection.extend({
  model: ShirtModel
});

var Order = Backbone.Model.extend({
  default: function(){
    console.log('1 ');
    return {
      items: new ShirtCollection()
    };
  },
  initialize: function(config){
    this.set('items', new ShirtCollection(config.items));
  },
  parse: function(data){
    if (data){
      data.items = new ShirtCollection (data.items);
      return data;
    } else {
      data.items = new ShirtCollection();
    }
  },
  localStorage: new Backbone.LocalStorage("Order")

});

var OrderCollection = Backbone.Collection.extend({
  model: Order
});

module.exports = {
  ShirtModel: ShirtModel,
  ShirtCollection: ShirtCollection,
  Order: Order
};
