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

  var fb = new Firebase("https://nsscohort10.firebaseio.com/users/");
  var usersObj;

  var clearAdd = function(){
    $('#add-name').val('');
    $('#add-age').val('');
    $('#add-gender').val('');
    $('#add-skills').val('');
  };

  pop.getAllUsers(function(data){
    fb.child('users').on('value', function(snapshot) {
    usersObj = snapshot.val();
    hbs.getTemp(usersObj, 'allUsers');
    });
  });

  $('#addBtn').on('click', function(){
    var addSong = {
      'name': $('#add-name').val(),
      'age': $('#add-age').val(),
      'gender': $('#add-gender').val(),
      'skills': $('#add-skills').val()
    };
    add.newSong(addSong);
    clearAdd();
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