'use strict';

const Route = use('Route');

module.exports = () => {
  /** ********************************************************
   * CARD
   */
  Route.get('/card/new/:tokenId', 'PaymentController.newCreditCard')
    .middleware('jwtAuth');
  Route.get('/card/default/:cardId', 'PaymentController.setDefaultCard')
    .middleware('jwtAuth');
  Route.get('/card/delete/:cardId', 'PaymentController.deleteCard')
    .middleware('jwtAuth');

  /** ********************************************************
   * SUBSCRIPTION
   */
  Route.post('/subscription', 'PaymentController.subscribe')
    .validator('payment/subscribePlan')
    .middleware('jwtAuth');

  Route.get('/subscription/cancel/:subId', 'PaymentController.cancelSubscription')
    .middleware('jwtAuth');


  /** ********************************************************
   * CUSTOMER
   */
  Route.get('/customer/me', 'PaymentController.getCustomer')
    .middleware('jwtAuth');
  Route.get('/customer/subscriptions', 'PaymentController.getCustomerSubscriptions')
    .middleware('jwtAuth');

  /** ********************************************************
   * INVOICES
   */
  Route.get('/customer/invoices', 'PaymentController.getInvoices')
    .middleware('jwtAuth');
};

