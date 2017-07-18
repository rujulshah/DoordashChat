app.controller('ChatRoomController', ['$scope', '$http', '$location', '$rootScope', function($scope, $http, $location, $rootScope) {
  $scope.$on('load-chat', function(event, args) {
    $scope.isRoomClicked = true;
    $scope.user_logged_in = $rootScope.user_name;
    $scope.room_data = $rootScope.room_info;
    $scope.room_data.users_online = $rootScope.user_name;
    $.each($scope.room_data.users,function(index,value){
      $scope.room_data.users_online = $scope.room_data.users_online +', ' + value;
    });
    var req_get = {
      method: "GET",
      url: "http://localhost:8080/api/rooms/"+$scope.room_data.id+"/messages"
    }
    $http(req_get).then(function success(response) {
      $scope.messages = response.data;
    }, function error(response) {
      alert('An error occured please try again later');
    });

    $scope.saveChat = function(){
      var data = {
        name: $scope.user_logged_in,
        message: $scope.user_message
      };
      var req = {
        method: "POST",
        url: "http://localhost:8080/api/rooms/"+$scope.room_data.id+"/messages",
        data: data
      }
      $http(req).then(function success(response) {
        $scope.messages.push(data);
        $scope.user_message = "";
      }, function error(response) {
        alert('An error occured please try again later');
      });
    }
  });

}]);
