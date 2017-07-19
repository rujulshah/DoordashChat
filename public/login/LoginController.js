app.controller('LoginController', ['$scope','$location','Users', function($scope,$location,Users) {
  $scope.user_name = "";
  $scope.goToChat = function(p){
    if($scope.loginForm.userName.$valid == false){
      $scope.loginForm.userName.$error.required = true;
      $scope.loginForm.userName.$dirty = true;
      return;
    }
    Users.logInUser($scope.user_name);
    $location.path(p);
  }
}]);
