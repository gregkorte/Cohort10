define(['jquery'], function($){
	var $output = $('#content');
	return{
		getInitOutput: function(){
			return $output;
		}
	};
});