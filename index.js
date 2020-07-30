require("app-module-path").addPath(__dirname);

const log 			= require("logger/logger");
const NodeServer 	= require("./src/servers/node_server");
const MongoServer 	= require("./src/servers/mongo_db_server");
process.on("uncaughtException", error => {
	log.error(`uncaughtException ==> ${error.message}`);
});

// Catch unhandling rejected promises
process.on("unhandledRejection", reason => {
	log.error(`unhandledRejection ==> ${reason}`);
});

//Start node server
NodeServer.init();
// Start mongo server
MongoServer.init();
