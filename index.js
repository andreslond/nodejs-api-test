const container = require("./src/startup/container");
const server = container.resolve("server");
const { MONGO_USER, MONGO_PASS, DB_NAME } = container.resolve('config');

const mongoose = require('mongoose');
//Deprecated option
//mongoose.set("useCreateIndex", true);

//Deprecated options
//{ useNewUrlParser: true, useFindAndModify: false }
let mongoUri = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.u9pum.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
mongoose
    .connect(mongoUri)
    .then(() => server.start())
    .catch(console.log);
