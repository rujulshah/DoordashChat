app.controller('ChatRoomController', ['$scope', 'Rooms','Users', '$anchorScroll', '$location', function($scope, Rooms, Users, $anchorScroll,$location) {
    $scope.Rooms = Rooms;
    $scope.Users = Users;
    $scope.count = 0;
    
    $scope.saveChat = function(){
      $scope.count += 1;
      var data = {
        name: Users.logged_in_user,
        message: $scope.user_message,
        id: "id_" + ($scope.count)
      };
      Rooms.addMessageInRoom(data).success(function(message){
        Rooms.selected_room_messages.push(data);
        $scope.user_message = "";
        goToLastMessage(data.id);
      }).error(function(error){
        alert("Could not save message! err:" + JSON.stringify(error));
        $scope.user_message = "";
      });
    }

    function goToLastMessage(id){
      $location.hash(id);
      $anchorScroll();
    }

}]);
