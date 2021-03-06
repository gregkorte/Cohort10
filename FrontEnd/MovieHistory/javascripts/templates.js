define(['jquery', 'hbs', 'dom-access'], function($, Handlebars, dom){
  return {
    getTemp: function(obj, temp){
      require(['hbs!../templates/' + temp], function(template){
        var show = dom.getContent();
        var filter = dom.getFilter();
        var movieList = template(obj);
        if (temp === 'movieMain' || temp === 'movieSearch'){
          show.html(movieList);
        } else {
          filter.html(movieList);
        }
      });
    }
  };
});