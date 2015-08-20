requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'jquery-ui': '../bower_components/jquery-ui/jquery-ui.min',
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
  ["jquery", "jquery-ui", "bootstrap", "firebase", "hbs", "dom", "populate", "add", 'delete', 'templates'],
  function($, ui, boot, _fire, Handlebars, dom, pop, add, del, hbs) {

  var fb = new Firebase("https://nsscohort10.firebaseio.com/");
  var usersObj;

  pop.getAllUsers(function(data){
    console.log('getAllUsers running');
    fb.child('users').on('value', function(snapshot) {
      console.log(snapshot.val());
    usersObj = snapshot.val();
    hbs.getTemp(usersObj, 'allUsers');
    });
  });

  // $('#addBtn').click(function(){
  $('#addBtn').click(function(){
    add.newUser();
    // clearAdd();
    //Add section on add page for most recent adds//
  });

  //.on('click', function(){
    // console.log($(this).val());
    // $('form').find('select').change(function(){
    //  $(this).siblings('select').val('');
    // });
  //});

  $('#contentWrapper').on('click', '.deletebtn', function(){
      $(this).closest('section').remove();
  });

});