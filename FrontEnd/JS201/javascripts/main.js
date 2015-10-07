requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../bower_components/firebase/firebase',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(
  ["jquery", "bootstrap", "firebase", "hbs", "dom", "populate", "add", 'delete', 'templates'],
  function($, boot, _fire, Handlebars, dom, pop, add, del, hbs) {

  pop.getAllUsers();

  $('#addBtn').click(function(){
    add.newUser();
  });

  $('#content').on('click', '.deletebtn', function(){
    del.removeUser($(this));
  });

});