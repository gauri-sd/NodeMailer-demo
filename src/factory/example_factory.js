const Response = require('../utils/response'),
    ResponseMessage = require('../utils/responseMessages'),
    StatusCode = require('../utils/statusCodes'),
    Constant = require('../utils/constants'),
    to = require('../utils/promise_handler'),
    ItemListStore = require('../models/example_model'),
    Email = require('../models/email_model'),
    sendMail = require('../email');

// For Database
exports.getAllProduct = async (request, reply) => {
    try {
        let itemList = await ItemListStore.find();
        return reply.response(Response.sendResponse(true, itemList, ResponseMessage.SUCCESS, StatusCode.OK));
    } catch (error) {
        return reply.response(Response.sendResponse(false, error, ResponseMessage.ERROR, StatusCode.BAD_REQUEST));
    }
}

exports.getOneProduct = async (request, reply) => {
    try {
        //let itemList = await ItemListStore.create(request.payload);
        let itemList = await ItemListStore.findById(request.params.id);
        return reply.response(Response.sendResponse(true, itemList, ResponseMessage.SUCCESS, StatusCode.OK));
    } catch (error) {
        return reply.response(Response.sendResponse(false, error, ResponseMessage.ERROR, StatusCode.BAD_REQUEST));
    }
}

exports.addProduct = async (request, reply) => {
    try {
        let itemList = await ItemListStore.create(request.payload);
        return reply.response(Response.sendResponse(true, itemList, ResponseMessage.SUCCESS, StatusCode.CREATED));
    } catch (error) {
        return reply.response(Response.sendResponse(false, error, ResponseMessage.ERROR, StatusCode.BAD_REQUEST));
    }
}

exports.updateProduct = async (request, reply) => {
    try {
        console.log(request.payload);
        // let itemList = await ItemListStore.findByIdAndUpdate({_id:request.params.id}, request.payload, function(err,prod) {
        //     if(err)
        //     {
        //         console.log(err);
        //     }
        //     else{
        //         console.log(prod);
        //     }
        // });
        let itemList = await ItemListStore.findByIdAndUpdate(request.params.id, request.payload, { new: true });
        console.log(itemList);
        return reply.response(Response.sendResponse(true, itemList, ResponseMessage.SUCCESS, StatusCode.OK));
    } catch (error) {
        return reply.response(Response.sendResponse(false, error, ResponseMessage.ERROR, StatusCode.BAD_REQUEST));
    }
}

exports.deleteProduct = async (request, reply) => {
    try {
        let itemList = await ItemListStore.findByIdAndDelete(request.params.id);
        return reply.response(Response.sendResponse(true, itemList, ResponseMessage.SUCCESS, StatusCode.OK));
    } catch (error) {
        return reply.response(Response.sendResponse(false, error, ResponseMessage.ERROR, StatusCode.BAD_REQUEST));
    }
}


// For Email

exports.addData = async (request, reply) => {
    try {
       

        let obj = {};
        obj['email'] = request.payload.email;
        obj['name'] = request.payload.name;
        obj['addr'] = request.payload.addr;
        sendMail.mailSend(obj);


        let newData = new Email({
            email: request.payload.email,
            name: request.payload.name,
            addr: request.payload.addr,
        });
        await newData.save();
        return reply.response(Response.sendResponse(true, newData, ResponseMessage.SUCCESS, StatusCode.OK));
    } catch (error) {
        console.log('Error addData: ', error);
        return reply.response(Response.sendResponse(false, error, ResponseMessage.ERROR, StatusCode.BAD_REQUEST));
    }
}