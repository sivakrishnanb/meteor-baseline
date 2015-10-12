FlowRouter.route('/', { 
  action: function (params, queryParams) {
    FlowLayout.render('layout', { top: '', main: 'login', bottom: '' });
  },
  name: 'login'
});
FlowRouter.route('/logout', { 
  action: function (params, queryParams) {
    AccountsTemplates.logout();
    FlowLayout.render('layout', { top: '', main: 'login', bottom: '' });
  },
  name: 'logout'
});
FlowRouter.route('/orders', {  
  subscriptions: function (params, queryParams) {
    this.register('orders', Meteor.subscribe('orders'));
  },
  action: function (params, queryParams) {
    FlowLayout.render('layout', { top: 'header', main: 'orders', bottom: 'footer' });
  },
  name: 'orders'
});

FlowRouter.route('/orders/:orderId', {  
  subscriptions: function (params, queryParams) {
    this.register('order', Meteor.subscribe('order', params.orderId));
  },
  action: function (params, queryParams) {
    FlowLayout.render('layout', { top: 'header', main: 'order', bottom: 'footer' });
  },
  name: 'order'
});