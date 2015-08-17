requirejs.config({
	baseUrl: './javascripts',
	paths: {
		'jquery': '../bower_components/jquery/dist/jquery.min',
		'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
		'firebase': '../bower_components/firebase/firebase',
		'hbs': '../bower_components/require-handlebars-plugin/hbs'
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
  function($, boot, _fire, Handlebars, dom, pop) {

	var fb = new Firebase("https://nsscohort10.firebaseio.com/music-history/");
	var output = dom.getInitOutput();

	var getHbs = function(arr, temp){
		// console.log('3. getHbs running');
		// console.log(arr);
		// console.log(temp);
		require(['hbs!../templates/' + temp], function(template){
			console.log('Require loaded!');
			console.log(arr);
			var songList = template(arr);
			console.log(songList);
			output.html(songList);
		});
	};

	pop.getInitSongs(function(data){
		fb.child('songs').on('value', function(snapshot) {
		var songArray = [];
		// console.log('2. Accessing fb');
		songArray.push(snapshot.val());
		getHbs(songArray, 'musicMain');
		});
	});

	$('#content').on('click', '.deletebtn', function(){
			$(this).closest('section').remove();
	});

});