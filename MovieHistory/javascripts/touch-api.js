define(['templates', 'add'], function(hbs, add){
  return{
    getMovieSearch: function(){
      var input = $('.searchBtn').siblings('#search-movie').val();
      // console.log('1. getInitSongs running');
      $.ajax({
        url: "http://www.omdbapi.com/?s=" + input
      }).done(function(input){
        console.log(input);
        hbs.getTemp(input, 'movieSearch');
      });
    },
    getMovie: function(btn){
      var id = btn.siblings('header').attr('id');
      $.ajax({
        url: "http://www.omdbapi.com/?i=" + id
      }).done(function(data){
        add.newMovie(data);
      });
    }
  };
});