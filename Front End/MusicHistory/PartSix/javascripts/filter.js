define(['underscore', 'templates', 'hbs'], function(_, hbs, Handlebars){

  return{
    artist: function(filter, obj){
      var newObj = _.where(obj, {artist: filter});
      hbs.getTemp(newObj, 'musicMain');
      //reset filter fields//
    },
    album: function(filter, obj){
      var newObj = _.where(obj, {album: filter});
      hbs.getTemp(newObj, 'musicMain');
    },
    year: function(filter, obj){
      var newObj = _.where(obj, {year: filter});
      hbs.getTemp(newObj, 'musicMain');
    }
  };
});