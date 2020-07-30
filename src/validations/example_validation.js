const Joi               = require("@hapi/joi"),
      Response          = require('../utils/response'),
      ResponseMessage   = require('../utils/responseMessages'),
      StatusCode        = require('../utils/statusCodes'),
      Constant          = require('../utils/constants'),
      log               = require('logger/logger');
const { optional } = require("@hapi/joi");

module.exports = Object.freeze({
    
    addProduct:{
        payload: {
            name: Joi.string().required().example('apple'),
            price: Joi.number().required().example('10'),
        },
        failAction(request, reply, error) {
            log.error("Payload error:",error)
            if(error){
                return reply.response(Response.sendResponse(false, error.output.payload.message, ResponseMessage.BAD_REQUEST, StatusCode.BAD_REQUEST)).takeover();
            }else{
                return reply.response(Response.sendResponse(false, null, ResponseMessage.INTERNAL_SERVER_ERROR, StatusCode.INTERNAL_SERVER_ERROR)).takeover();
            }
        }
    },
    getOneProduct:{
        params:{
            id: Joi.string().required().example('25451cdefv'),
        },
       
        failAction(request, reply, error) {
            if(error){
                return reply.response(Response.sendResponse(false, error.output.payload.message, ResponseMessage.BAD_REQUEST, StatusCode.BAD_REQUEST)).takeover();
            }else{
                return reply.response(Response.sendResponse(false, null, ResponseMessage.INTERNAL_SERVER_ERROR, StatusCode.INTERNAL_SERVER_ERROR)).takeover();
            }
        }
    },
    updateProduct:{
        params:{
            id: Joi.string().required().example('25451cdefv'),
        },
        payload:{
            name: Joi.string().optional().example('apple'),
            price: Joi.number().optional().example(10),
        },
        failAction(request, reply, error) {
            if(error){
                return reply.response(Response.sendResponse(false, error.output.payload.message, ResponseMessage.BAD_REQUEST, StatusCode.BAD_REQUEST)).takeover();
            }else{
                return reply.response(Response.sendResponse(false, null, ResponseMessage.INTERNAL_SERVER_ERROR, StatusCode.INTERNAL_SERVER_ERROR)).takeover();
            }
        }
    },

    deleteProduct:{
        params:{
            id: Joi.string().required().example('225451cdefv1'),
        },
        failAction(request, reply, error) {
            if(error){
                return reply.response(Response.sendResponse(false, error.output.payload.message, ResponseMessage.BAD_REQUEST, StatusCode.BAD_REQUEST)).takeover();
            }else{
                return reply.response(Response.sendResponse(false, null, ResponseMessage.INTERNAL_SERVER_ERROR, StatusCode.INTERNAL_SERVER_ERROR)).takeover();
            }
        }
    },

    // For email
    addData:{
        payload: {
            email: Joi.string().required().example('gauridurugkar98@gmail.com'),
            name: Joi.string().required().example('Gauri'),
            addr: Joi.string().required().example('Baramati'),
        },
        failAction(request, reply, error) {
            log.error("Payload error:",error)
            if(error){
                return reply.response(Response.sendResponse(false, error.output.payload.message, ResponseMessage.BAD_REQUEST, StatusCode.BAD_REQUEST)).takeover();
            }else{
                return reply.response(Response.sendResponse(false, null, ResponseMessage.INTERNAL_SERVER_ERROR, StatusCode.INTERNAL_SERVER_ERROR)).takeover();
            }
        }
    },
})