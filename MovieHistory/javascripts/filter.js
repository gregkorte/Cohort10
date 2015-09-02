define(['underscore', 'templates'], function(_, hbs){
  return{
    // dupesFilter: function(obj) {
    // },
    year: function(filter, obj){
      var newObj = _.where(obj, {Year: filter});
      console.log(newObj);
      hbs.getTemp(newObj, 'movieMain');
      //reset filter fields//
    },
    actors: function(filter, obj){
      var newObj = _.where(obj, {Actors: filter});
      hbs.getTemp(newObj, 'movieMain');
    },
    rating: function(filter, obj){
      var newObj = _.where(obj, {Rated: filter});
      hbs.getTemp(newObj, 'movieMain');
    },
    dupes: function(filter, obj){
      return _.chain(obj)
              .sortBy(filter)
              .pluck(filter)
              .uniq()
              .compact()
              .value();
    }
  };
});

//_.chain(obj).flatten().where(obj, {year: filter}).sortBy(newObj, 'year')