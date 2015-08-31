define(['underscore', 'templates'], function(_, hbs){
  return{
    // dupesFilter: function(obj) {
    // },
    year: function(filter, obj){
      console.log(obj);
      var newObj = _.where(obj, {year: filter});
      hbs.getTemp(newObj, 'movieMain');
      //reset filter fields//
    },
    actors: function(filter, obj){
      var newObj = _.where(obj, {actors: filter});
      hbs.getTemp(newObj, 'movieMain');
    },
    rating: function(filter, obj){
      var newObj = _.where(obj, {rating: filter});
      hbs.getTemp(newObj, 'movieMain');
    }
  };
});