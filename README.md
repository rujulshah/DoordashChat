# Running the project
* In order to run the project run `npm-start` and `npm run api-server`. Browse to localhost:3000.
* I haven't committed the node_modules folder. Please install all the dependencies by running `npm install`.

# Project details
`AngularJS` framework is used for implementing the chatroom UI. The project implementation is included in the `public` directory with the following structure:
- `js` directory:
   * `index.js`: the application module definition.
   * `RoomService.js` , `UserService.js`: service definitions to talk to API and maintain a shared data model, logic and for data binding with the templates.
- `login` directory:
  * `login.html`: template for login page.
  * `LoginController.js`: handles the user login.
- `chat` directory:
  * `chat.html`: template for main chat page. Contains three templates for user information, chat room list and chat room.
  * `ChatController.js`: handles the chat page actions.
  * `chat-room` directory:
    - `chatroom.html`: chat room template to display messages.
    -  `ChatRoomController.js`: handles actions on chat room template.
  * `side-bar` directory:
    - `sidebar.html`: template to load the chat room list.
    - `SideBarController.js`: handles actions for chat room list.
  * `user-info` directory:
    - `userinfo.html`: template to display logged in username and time.
    - `UserInfoContoller.js`: handles User information updates.
