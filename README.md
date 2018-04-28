# realtime-food-ordering
This is a sample nodejs + reactjs web app to learn [egg.js](https://eggjs.org) and [socket.io](https://socket.io).

## Tech stack
### Backend
* MySQL 5.7
* [egg.js](https://eggjs.org), with these plugins:
    * [egg-socket.io](https://github.com/eggjs/egg-socket.io), to work with socket.io to implement realtime functionalities.
    * [egg-redis](https://github.com/eggjs/egg-redis)
    * [egg-sequelize](https://github.com/eggjs/egg-sequelize), an active-record style ORM.

### Frontend
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org)
* [bulma](https://bulma.io)

## Get started
* Clone this repo.
* `cd db`
* `./db_up.sh`, to start mysql and redis in docker.
* `cd ../backend`
* `yarn install`
* `yarn dev`, to start backend server.
* `cd ../frontend`
* `yarn install`
* `yarn watch`, compile and watch file changes.
* `yarn server`, start development server to serve compiled files (I didn't use webpack-dev-server so we need 2 steps here to start dev server).
* Open browser at `http://localhost:3000`, one browser tab corresponds to a "user".

## Screenshots
User 1:
![user_1](https://raw.githubusercontent.com/athrunsun/realtime-food-ordering/master/screenshots/user_1.png)

User 2:
![user_2](https://raw.githubusercontent.com/athrunsun/realtime-food-ordering/master/screenshots/user_2.png)

## TODO
* Create config files (for webpack and egg.js) to create a production build.
* Build into docker containers, and start with a docker-compose command.
