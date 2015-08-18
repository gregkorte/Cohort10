define(['jquery', 'hbs', 'dom-access'], function($, Handlebars, dom){
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
          filter.html(songList);
        }
      });
    }
  };
});