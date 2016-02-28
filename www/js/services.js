angular.module('starter.services', [])

.factory('Items', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [{
    id: 0,
    name: 'Jam',
    qty: 1,
    price: 0
  }, {
    id: 1,
    name: 'Butter',
    qty: 1,
    price: 0
  }, {
    id: 2,
    name: 'Beans',
    qty: 6,
    price: 0
  }, {
    id: 3,
    name: 'Chocolate bars',
    qty: 2,
    price: 0
  }, {
    id: 4,
    name: 'Cheese',
    qty: 1,
    price: 0
  }];

  return {
    all: function() {
      return items;
    },
    remove: function(item) {
      items.splice(items.indexOf(item), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(chatId)) {
          return items[i];
        }
      }
      return null;
    }
  };
});
