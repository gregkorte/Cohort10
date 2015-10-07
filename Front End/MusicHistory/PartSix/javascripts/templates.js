define(['jquery', 'dom-access', 'dupes'], function($, dom, dupes){
  console.log(arguments);
  return {
    getTemp: function(obj, temp){
      require(['hbs!../templates/' + temp], function(template){
        var show = dom.getContent();
        var filter = dom.getFilter();
        obj = {song: obj};
        var songList = template(obj);
        if (temp === 'musicMain'){
          show.html(songList);
        } else {
          console.log(_.pluck(obj.song));
          var albums = dupes.extract(_.pluck(obj.song));
          var artists = dupes.extract(_.pluck(obj.song));
          var years = dupes.extract(_.pluck(obj.song));
          console.log(albums);
          console.log(artists);
          console.log(years);
          filter.html(songList);
        }
      });
    }
  };
});