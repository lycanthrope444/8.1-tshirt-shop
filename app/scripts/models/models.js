var Backbone = require('backbone');

var ShirtModel = Backbone.Model.extend({

});

var ShirtCollection = Backbone.Collection.extend({
  model: ShirtModel
});

var Order = Backbone.Model.extend({

});

module.exports = {
  ShirtModel: ShirtModel,
  ShirtCollection: ShirtCollection,
  Order: Order
};
