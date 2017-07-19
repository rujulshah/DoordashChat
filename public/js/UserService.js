angular.module('UserService',[]).factory('Users', ['$interval',function($interval){
  var service = {};
  service.logged_in_user;
  service.logged_in_time;
  service.display_string_logged_in_time = "0";
  service.timer;

  service.logInUser = function(user_name){
    service.logged_in_user = user_name;
    service.logged_in_time = Date.now();
    service.timer = $interval(function(){
      var now = Date.now();
      var diff = now - service.logged_in_time;
      service.display_string_logged_in_time = Math.floor((diff/1000)/60);
    },60000);
  };

  service.logOutUser = function(){
    if(service.timer){
      $interval.cancel(service.timer);
    }
  }

  return service;
}]);
