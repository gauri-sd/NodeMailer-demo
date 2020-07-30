const log = require('logger/logger'),
      _config           = require('config');

const swaggerOptions = {
    info:{
        title:"Hapi-demo",
        description:"Product API",
        version:"1.0"
    },
    host: '0.0.0.0:'+_config.server.port,
    tags:[
        {
            name: "Hapi-demo",
            description:"API interface"
        }
    ],
    grouping : 'tags',
    swaggerUI: true,
    documentationPage: true,
	documentationPath: "/documentation",
}
const register = async server =>{
    try{
        return server.register([
            require("@hapi/inert"),
            require("@hapi/vision"),
            {
                plugin: require('hapi-swagger'),
                options: swaggerOptions
            }
        ])
    }catch(error){
        log.info(`Error registering swagger plugin: ${error}`);
    }
}

module.exports = {
    register,
    info: { name: "Swagger Documentation", version: "1.0.0" },
};
