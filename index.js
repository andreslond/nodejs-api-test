const container = require("./src/startup/container");
const server = container.resolve("server");
const { MONGO_URI } = container.resolve('config');

const mongoose = require('mongoose');
//Deprecated option
//mongoose.set("useCreateIndex", true);

//Deprecated options
//{ useNewUrlParser: true, useFindAndModify: false }
mongoose
    .connect(MONGO_URI)
    .then(() => server.start())
    .catch(console.log);
