define(['jquery', 'hbs', 'dom'], function($, Handlebars, dom){
  return {
    getTemp: function(obj, temp){
      console.log('getTemp running');
      console.log(obj);
      console.log(temp);
      require(['hbs!../templates/' + temp], function(template){
        var show = dom.getAllUsers();
        obj = {user: obj};
        var userList = template(obj);
        show.html(userList);
      });
    }
  };
});