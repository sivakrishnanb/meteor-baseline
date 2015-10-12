Template.orders.helpers({  
  getOrders: function () {
    return Orders.find({}, { sort: { createdAt: -1 }});
  }
});