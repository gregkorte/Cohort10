define(function(){
  return{
    newUser: function(){
      var addUser = {
      'name': $('#name').val(),
      'age': $('#age').val(),
      'gender': $('#gender').val(),
      'skills': $('#skills').val().split(', '),
    };
    console.log(addUser.skills);
      $.ajax({
        url: "https://nsscohort10.firebaseio.com/users.json",
        method: "POST",
        data: JSON.stringify(addUser)
      }).done(function(data){
      });
    }
  };
});