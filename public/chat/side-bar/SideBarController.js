app.controller('SideBarController', ['$scope','Rooms','Users', function($scope, Rooms, Users) {
  $scope.Rooms = Rooms;
  $scope.status;
  $scope.room_list;
  getRoomList();

  function getRoomList() {
      Rooms.getRoomList().success(function(room_list) {
          $scope.room_list = room_list;
      }).error(function(error) {
          $scope.status = "Could not retrieve chat room list err:" + error;
      })
  }


  $scope.updateChatRoom = function(room_id){
    Rooms.updateRoomSelection(Users.logged_in_user,room_id);
    
  };

}]);
