define(['jquery'], function($){
	return{
		getWrapper: function(){
			return $('#contentWrapper');
    },
    getFilter: function(){
      return $('#filter').find('.selected').val();
    }
	};
});