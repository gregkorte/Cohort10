requirejs.config({
	baseUrl: './javascripts',
	paths: {
		'jquery': '../bower_components/jquery/dist/jquery.min'
	}
});

requirejs(
  ["jquery", "dom-access", "populate-songs", "get-more-songs"],
  function($, dom, pop, more) {

  var initialSongs = [];
	var output = dom.getInitOutput();
	var counter = 0;

	pop.getInitSongs(function(data){
	}, output);

	$('#content').on('click', '.more', function(){
		counter++;
		if(counter > 1) {
			return;
		} else {
			more.getMoreSongs(function(data){
			}, output);
		}
	});

	$('#content').on('click', '.deletebtn', function(){
			$(this).closest('section').remove();
	});

});