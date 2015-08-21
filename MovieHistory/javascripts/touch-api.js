define(function(){
  return{
    getMovie: function(query, cb2main){
      // console.log('1. getInitSongs running');
      $.ajax({
        url: "http://www.omdbapi.com/?t=" + query + "&y=&plot=short&r=json"
      }).done(function(data){
        console.log(data);
        cb2main.call(this, data);
      });
    }
  };
});