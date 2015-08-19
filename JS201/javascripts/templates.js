define(['jquery', 'hbs', 'dom'], function($, Handlebars, dom){
  return {
    getTemp: function(obj, temp){
      require(['hbs!../templates/' + temp], function(template){
        var show = dom.getAllUsers();
        obj = {user: obj};
        var userList = template(obj);
        if (temp === 'userMain'){
          show.html(userList);
        } else {
          filter.html(userList);
        }
      });
    }
  };
});