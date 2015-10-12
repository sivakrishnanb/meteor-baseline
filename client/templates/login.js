AccountsTemplates.logout();
  var mySubmitFunc = function(error, state){
    if (!error) {
      if (state === "signIn") {
        // Successfully logged in
        // ...
        alert('signed in')
      }
      if (state === "signUp") {
        // Successfully registered
        // ...
        alert('signup success');
      }
    }
  };

  AccountsTemplates.configure({
      onSubmitHook: mySubmitFunc
  });

  var myPostLogout = function(){
    //example redirect after logout
    Router.go('/home');
  };

  AccountsTemplates.configure({
      onLogoutHook: myPostLogout
  });