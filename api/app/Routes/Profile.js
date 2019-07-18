'use strict';

const Route = use('Route');

module.exports = () => {
  // Route.get('/', 'ProfileController.index')
  Route.get('', 'ProfileController.me').middleware('jwtAuth');
  Route.post('update', 'ProfileController.update').middleware('jwtAuthVerified').validator('profile/UpdateProfile');
  Route.post('update/avatar', 'ProfileController.updateAvatar').middleware('jwtAuthVerified').validator('profile/UpdateAvatar');
};
