define(['jquery', 'hbs', 'dom'], function($, Handlebars, dom){
  return {
    getTemp: function(obj, temp){
      require(['hbs!../templates/' + temp], function(template){
        var show = dom.getAllUsers();
        obj = {users: obj};
        var userList = template(obj);
        show.html(userList);
      });
    }
  };
});