define(['jquery', 'dom-access', 'dupes'], function($, dom, dupes){
  console.log(arguments);
  return {
    extract: function(arr){
      console.log(arr);
      return _.uniq(arr);
    }
  };
});