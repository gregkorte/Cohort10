define(['templates'], function(hbs){
  return{
    getAllUsers: function(cb2main){
      var fb = new Firebase("https://nsscohort10.firebaseio.com/");
      $.ajax({
        url: "https://nsscohort10.firebaseio.com/users/"
      }).done(function(data){
        fb.child('users').on('value', function(snapshot) {
        usersObj = snapshot.val();
        hbs.getTemp(usersObj, 'allUsers');
        });
      });
    }
  };
});