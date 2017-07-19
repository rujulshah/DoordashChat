app.controller('UserInfoController', ['$scope', 'Users', function($scope, Users) {
  $scope.Users = Users;
  $scope.$on('$destroy',function(){
    Users.logOutUser();
  });
}]);
