requirejs.config({
	baseUrl: './javascripts',
	paths: {
		'jquery': '../bower_components/jquery/dist/jquery.min',
		'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
		'firebase': '../bower_components/firebase/firebase',
		'hbs': '../bower_components/require-handlebars-plugin/hbs/handlebars'
	},
	shim: {
		'bootstrap': ['jquery'],
		'firebase': {
			exports: 'Firebase'
		}
	}
});

requirejs(
  ["jquery", "bootstrap", "firebase", "hbs", "dom-access", "populate-songs"],
  function($, boot, fire, hbs, dom, pop) {

	var output = dom.getInitOutput();

	pop.getInitSongs(function(data){
	}, output);

	$('#content').on('click', '.deletebtn', function(){
			$(this).closest('section').remove();
	});

	

});