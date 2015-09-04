define(['underscore', 'templates'], function(_, hbs){
  return{
    year: function(filter, obj){
      var newObj = _.where(obj, {Year: filter});
      hbs.getTemp(newObj, 'movieMain');
    },
    actors: function(filter, obj){
      var newObj = {};
      var newArr = [];
      for (items in obj){
        var actArr = obj[items].Actors;
        for (var i = 0; i < actArr.length; i++){
          if (filter === actArr[i]){
            var key = items;
            newArr.push({[key]: obj[items]});
            newObj[key] = obj[items];
          }
        }
      }
      hbs.getTemp(newObj, 'movieMain');
    },
    rating: function(filter, obj){
      var newObj = _.where(obj, {Rated: filter});
      hbs.getTemp(newObj, 'movieMain');
    },
    dupes: function(filter, obj){
      if (filter === 'Actors'){
        return _.chain(obj)
                .pluck(filter)
                .flatten()
                .sort() //FIX THIS: IT'S NOT WORKING... WELL
                .uniq()
                .compact()
                .value();
      } else {
          return _.chain(obj)
                  .sortBy(filter)
                  .pluck(filter)
                  .uniq()
                  .compact()
                  .value();
      }
    }
  };
});

//_.chain(obj).flatten().where(obj, {year: filter}).sortBy(newObj, 'year')