define(['underscore', 'templates'], function(_, hbs){
  return{
    // dupesFilter: function(obj) {
    // },
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