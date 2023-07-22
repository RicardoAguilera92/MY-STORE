const productsRouter = require('./products.router');
//const usersRouter = requiree('./users.router');

function routerApi(app) {
  app.use('/products', productsRouter);
  // app.use('/users', productsRouter);
}

module.exports = routerApi;
