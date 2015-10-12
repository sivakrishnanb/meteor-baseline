function randomDate(start, end) {  
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

Meteor.startup(function () {  
  if (Orders.find().count() === 0) {
    _(5).times(function (n) {
      Orders.insert({
        orderId : 'Order Id ' + n,
        name: 'Name ' + n,
        description: 'Content body ' + n,
        createdAt: randomDate(new Date(2015, 0, 1), new Date())
      });
    });
  }
});