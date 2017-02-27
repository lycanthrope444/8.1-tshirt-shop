var Backbone = require('backbone');

var AppRouter = Backbone.Router.extend({
  routes:{
    'index':'index'
  }
});

var appRouter = new AppRouter();

module.exports = appRouter;
