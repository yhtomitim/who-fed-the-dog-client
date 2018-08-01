# Who Fed The Dog?!, client-side

A Vue.js app built with Vuetify.js that helps keep track of who fed a dog or other pet. Backed with an Express API and PostgreSQL db. The server-side source code can be found [here](https://github.com/yhtomitim/who-fed-the-dog-server).

## Build Setup

``` bash
# install dependencies
$ npm install
# or
$ yarn install

# serve with hot reload at localhost:3000
$ npm run dev
# or
$ yarn run dev

# build for production and launch server
$ npm run build
$ npm start
# or
$ yarn run build
$ yarn start
```
### Overview

The app is built using Vue Router for navigation between views Using the buttons in the nav bar will take you to a new view.

The app allows you to search for a specific user by name, edit the user's name (if found), if the user's name is not found, you can add it to the database.

The app also allows you to search for a specific pet by name, edit the pet's name (if found), if the pet's name is not found, you can add it to the database.

The app features a chart which shows an oveview of the number of users in the app's user table, the number of pets in the app's pet table, and a cumulative number of times a pet has been marked as fed using our app.

### Future Design

- I plan to add a feature to protect against duplicate user or pet names
- I plan to add a feature for logging into an account that manages family members and pets
- I plan on editing the timestamp to be more human-readable
