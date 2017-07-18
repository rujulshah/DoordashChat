// $(document).ready(function() {
//   alert('hello');
// });
var app = angular.module("myChat",["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider.
  when('/login',{
    templateUrl: "login/login.html",
    controller: "LoginController"
  }).
  when('/chat',{
    templateUrl: "chat/chat.html",
    controller: "ChatController"
  }).
  otherwise({
    redirectTo: "/login"
  });

});
