define(function(){
  return {
    removeUser: function(btn){
      var fb = new Firebase("https://nsscohort10.firebaseio.com/");
      key = btn.closest('section').attr('name');
      fb.child('users').child(key).remove();
    }
  };
});