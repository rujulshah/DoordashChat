// $(document).ready(function() {
//   alert('hello');
// });
var app = angular.module("myChat",["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider.
  when('/login',{
    templateUrl: "login.html",
    controller: "LoginController"
  }).
  when('/chat',{
    templateUrl: "chat.html",
    controller: "ChatController"
  }).
  otherwise({
    redirectTo: "/login"
  });
  app.factory('items', function() {
    var items = {};
    var itemsService = {};

    itemsService.list = function() {
        return items;
    };

    return itemsService;
});
});
