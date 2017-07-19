app.controller('ChatController', ['$scope','$location','Users', function($scope,$location,Users) {
  $scope.Users = Users;
  if(Users.logged_in_user == undefined || Users.logged_in_user == "" || Users.logged_in_user == null){
    //if not logged in redirect
    $location.path('/login');
  }
}]);
