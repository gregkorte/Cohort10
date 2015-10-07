define(['templates', 'add'], function(hbs, add){
  return{
    getMovieSearch: function(){
      var input = $('.searchBtn').closest('.input-group').children('#search-movie').val();
      console.log(input);
      $.ajax({
        url: "http://www.omdbapi.com/?s=" + input
      }).done(function(input){
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