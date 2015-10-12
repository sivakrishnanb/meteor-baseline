AccountsTemplates.logout();
  var mySubmitFunc = function(error, state){
    if (!error) {
      if (state === "signIn") {
        // Successfully logged in
        // ...
        setTimeout(function(){
          alert('login success');
          FlowRouter.go('/orders');
        },1000)
      }
      if (state === "signUp") {
        // Successfully registered
        // ...
        setTimeout(function(){
          alert('please login now');
          FlowRouter.go('/');
        },1000)
      }
    }
  };

  AccountsTemplates.configure({
      onSubmitHook: mySubmitFunc
  });

  var myPostLogout = function(){
    //example redirect after logout
    FlowRouter.go('/');
  };

  AccountsTemplates.configure({
      onLogoutHook: myPostLogout
  });