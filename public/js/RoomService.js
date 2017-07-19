angular.module('RoomService', []).factory('Rooms', ['$http', function($http) {

    var api = 'http://localhost:8080/api';
    var service = {};
    service.selected_room_id;
    service.selected_room_info;
    service.selected_room_messages;
    service.selected_room_received_messages_users = "";

    service.updateRoomSelection = function(current_user_name,room_id){
      service.selected_room_id = room_id;
      this.getRoomDetail().success(function(room_info){
        service.selected_room_info = room_info;
        var other_users = {};
        $.each(room_info.users,function(index,value){
          if (value != current_user_name) other_users[value] = value;
        });
        service.selected_room_received_messages_users = other_users;
      });
      this.getMessages(room_id).success(function(room_messages){
        service.selected_room_messages = room_messages;
      });
    }

    service.getRoomList = function() {
        return $http.get(api + "/rooms");
    };

    service.getRoomDetail = function() {
        return $http.get(api + "/rooms/" + this.selected_room_id);
    };

    service.addMessageInRoom = function(message) {
        return $http.post(api + "/rooms/" + this.selected_room_id + "/messages", message);
    };

    service.getMessages = function(roomid) {
        return $http.get(api + "/rooms/" + this.selected_room_id + "/messages");
    };

    return service;

}]);
