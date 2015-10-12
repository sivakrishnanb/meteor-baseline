Template.order.helpers({  
  getOrder: function () {
    return Orders.findOne();
  }
});