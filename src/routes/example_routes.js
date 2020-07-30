const ExampleController = require('../controller/example_controller');

module.exports = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) =>{
            return h.response({"status":"running"}).code(200)
        }
    },

    // For Mongo Database
    {
        method: "GET",
        path:"/api/product",
        config: ExampleController.getAllProduct
    },

    {
        method: "GET",
        path:"/api/product/{id}",
        config: ExampleController.getOneProduct
    },
    
    {
        method: "POST",
        path: "/api/product",
        config: ExampleController.addProduct
    },

    {
        method: "PUT",
        path: "/api/product/{id}",
        config: ExampleController.updateProduct
    },

    {
        method: "DELETE",
        path: "/api/product/{id}",
        config: ExampleController.deleteProduct
    },

    // For Email

    {
        method: "POST",
        path: "/api/email",
        config: ExampleController.addData
    },   
]