// $(document).ready(function() {
//   alert('hello');
// });
var app = angular.module("myChat", ["ngRoute", "RoomService", "UserService"]);
app.config(function($routeProvider) {
  $routeProvider.
  when('/login', {
    templateUrl: "login/login.html",
    controller: "LoginController"
  }).
  when('/chat', {
    templateUrl: "chat/chat.html",
    controller: "ChatController"
  }).
  otherwise({
    redirectTo: "/login"
  });

});

app.directive('myEnter', function() {
  return function(scope, element, attrs) {
    element.bind("keydown keypress", function(event) {
      if (event.which === 13) {
        scope.$apply(function() {
          scope.$eval(attrs.myEnter);
        });
        event.preventDefault();
      }
    });
  };
});
