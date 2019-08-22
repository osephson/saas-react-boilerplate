'use strict';

const Route = use('Route');
const Env = use('Env');

Route.get('/', () => ({ message: `Welcome - ${Env.get('ENV')}` })).as('home');

Route.group(use('App/Routes/Auth')).prefix('api/auth');
Route.group(use('App/Routes/Profile')).prefix('api/profile');
Route.group(use('App/Routes/Logs')).prefix('api/logs').middleware('jwtAuth');
Route.group(use('App/Routes/Payment')).prefix('api/payment').middleware('jwtAuth');
Route.group(use('App/Routes/User')).prefix('api/user').middleware('jwtAuth');
Route.group(use('App/Routes/StripeWebHook')).prefix('api/stripe/webhook');

// 404 page not found
Route.any('*', ({ response }) => response.status(404).json({
  message: '404 Page not found'
}));
