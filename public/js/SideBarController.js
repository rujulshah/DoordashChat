app.controller('SideBarController', ['$scope', '$http', '$location', '$rootScope', function($scope, $http, $location, $rootScope) {
  var req_get = {
    method: "GET",
    url: "http://localhost:8080/api/rooms"
  }
  $http(req_get).then(function success(response) {
    $scope.navbar = response.data;
  }, function error(response) {
    alert('An error occured please try again later');
  });

  $scope.getRoomDetails = function(room_id){
    var req = {
      method: "GET",
      url: "http://localhost:8080/api/rooms/"+room_id
    }
    $http(req).then(function success(response) {
      $rootScope.room_info = response.data;
      $rootScope.$broadcast('load-chat');
    }, function error(response) {
      alert('An error occured please try again later');
    });

  }

}]);
