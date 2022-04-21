const { createContainer, asClass, asValue, asFunction } = require("awilix");

//Config
const config = require('../config');
const server = require('./index');
// services
const { HomeService } = require('../services');

// controllers
const { HomeController } = require('../controllers/index');

// Routers
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

const container = createContainer();

container
    .register({
        server: asClass(server).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton()
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
    });

module.exports = container;