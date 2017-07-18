app.controller('UserInfoController', ['$scope', '$http', '$location', '$rootScope', function($scope, $http, $location, $rootScope) {
  $scope.user_info = {};
  $scope.user_info.name = $rootScope.user_name;

}]);
