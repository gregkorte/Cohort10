define(['templates'], function(hbs){
  return{
    getMovieSearch: function(){
      var input = $('.searchBtn').siblings('#search-movie').val();
      // console.log('1. getInitSongs running');
      $.ajax({
        url: "http://www.omdbapi.com/?s=" + input// + "&y=&plot=short&r=json"
      }).done(function(input){
        console.log(input);
        hbs.getTemp(input, 'movieSearch');
      });
    },
    getMovie: function(query, cb2Main){
      $ajax({
        url: "http://www.omdbapi.com/?i=" + query
      }).done(function(data){
        cb2Main.call(this, data);
      });
    }
  };
});