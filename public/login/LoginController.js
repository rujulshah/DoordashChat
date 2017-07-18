app.controller('LoginController', ['$scope', '$http','$location','$rootScope', function($scope, $http,$location,$rootScope) {
  $scope.user_name = "";
  $scope.goToChat = function(p){
    if($scope.loginForm.userName.$valid == false){
      $scope.loginForm.userName.$error.required = true;
      $scope.loginForm.userName.$dirty = true;
      return;
    }
    $rootScope.user_name = $scope.user_name;
    $location.path(p);
  }
}]);
