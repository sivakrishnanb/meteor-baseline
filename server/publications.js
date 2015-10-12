Meteor.publish('orders', function () {  
  return Orders.find({});
});

Meteor.publish('order', function (orderId) {  
  return Orders.find({ _id: orderId });
});