const routes = require('express').Router();

const userController = require ("./app/controllers/UserController");

routes.post("/users", userController.store);

routes.get("/users", userController.index);
routes.get("/users/:id", userController.show);
routes.put("/users/:id", userController.update);
routes.post("/users/:id", userController.destroy);
  
module.exports = routes; 