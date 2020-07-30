const Hapi              = require('@hapi/hapi'),
      _corsHeaders      = require('hapi-cors-headers'),
      _config           = require('config'),
      _plugins          = require('../../plugins/index'),
      log               = require('logger/logger');

exports.init = async nodeserver =>{
    try{
        const server = new Hapi.Server({
            debug: {request:['error']},
            host: _config.server.host,
            port: _config.server.port,
            routes: {
				cors: {
					origin: ["*"],
                },
                timeout: {
                    server: 1200000, // 1,200,000 or 20 minutes
                    socket: 1300000
                },
			},
        });
        server.validator(require('@hapi/joi'));
        let pluginPromises = [];
        _plugins().forEach((pluginName)=>{
            var plugin = require('plugins/'+pluginName);
            log.info(`Register Plugin ${plugin.info.name} - ${plugin.info.version}`)
            pluginPromises.push(plugin.register(server));
        });
        
        await Promise.all(pluginPromises);
        log.info("All plugins registered successfully.");

        let Routes = require('src/routes');
        for(const route in Routes){
            server.route(Routes[route]);
        }

        server.start();

        server.events.on("response", request => {
			if (request.response) {
				log.error(
					`${request.info.remoteAddress}: ${request.method.toUpperCase()} ${
						request.url.pathname
					} --> ${request.response.statusCode}`,
				);
			} else {
				log.info(
					"No statusCode : ",
					request.info.remoteAddress +
						": " +
						request.method.toUpperCase() +
						" " +
						request.url.pathname +
						" --> ",
				);
			}
		});
        
		// server.events.on("route", route => {
		// 	console.log(`New route added: ${route.path}`);
		// });
		server.events.on("start", route => {
			log.info("Node server is running on ==> ", server.info.uri);
		});
		server.events.on("stop", route => {
			console.log("Server has been stopped");
        });
		return server;
    }catch(error){
        log.error("Error starting node server: ",error);
        throw error;
    }
}
