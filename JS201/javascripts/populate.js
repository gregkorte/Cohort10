define(function(){
  return{
    getAllUsers: function(cb2main){
      $.ajax({
        url: "https://nsscohort10.firebaseio.com/users/"
      }).done(function(data){
        cb2main.call(this, data);
      });
    }
  };
});