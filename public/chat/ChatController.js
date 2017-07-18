app.controller('ChatController', ['$scope', '$http','$location','$rootScope', function($scope,$http,$location,$rootScope) {
  if($rootScope.user_name == undefined || $rootScope.user_name == "" || $rootScope.user_name == null){
    //if not logged in redirect
    //$location.path('/login');
  }
}]);
