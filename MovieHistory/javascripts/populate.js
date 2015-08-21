define(function(){
  return{
    getInitMovies: function(cb2main){
      // console.log('1. getInitSongs running');
      $.ajax({
        url: "https://nsscohort10.firebaseio.com/movie-history/"
      }).done(function(data){
        cb2main.call(this, data);
      });
    }
  };
});