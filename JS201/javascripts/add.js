define(function(){
  return{
    newSong: function(user){
      $.ajax({
        url: "https://nsscohort10.firebaseio.com/users/user.json",
        method: "POST",
        data: JSON.stringify(user)
      }).done(function(data){
      });
    }
  };
});