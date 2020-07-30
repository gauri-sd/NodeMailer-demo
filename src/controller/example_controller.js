const ExampleValidation   =  require('../validations/example_validation'),
      ExampleFactory      =  require('../factory/example_factory'),
      Response            =  require('../utils/response'),
      Joi                 =  require('@hapi/joi');
       

const response_format = Joi.object({
		is_success: Joi.boolean().required(),
		result: Joi.any().optional(),
		message: Joi.string().required(),
		status_code: Joi.number().required(),
	}),
	response = {
		status: {
			200: response_format,
			201: response_format,
			400: response_format,
			500: response_format,
		},
    };
  
// For Mongo Database
exports.getAllProduct = {
    description: "GET example: Get Product list from mongo db",
    tags: ['api'],
    plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
    },
    handler:(request, h)=>{
        return ExampleFactory.getAllProduct(request, h);
    },
    response
}

exports.getOneProduct = {
  description: "GET example: Get product by id from mongo db",
  tags: ['api'],
  plugins: {
  "hapi-swaggered": {
    responses: Response.responses,
  },
  },
  validate: ExampleValidation.getOneProduct,
  handler:(request, h)=>{
      return ExampleFactory.getOneProduct(request, h);
  },
  response
}

exports.addProduct = {
    description: "POST example: Add an item to the list",
    tags: ['api'],
    plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
    },
    validate: ExampleValidation.addProduct,
    handler:(request, h)=>{
        return ExampleFactory.addProduct(request, h);
    },
    response
}

exports.updateProduct= {
  description: "PUT example updating product",
  tags: ['api'],
  plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
  },
  validate: ExampleValidation.updateProduct,
  handler: (request, h)=>{
      return ExampleFactory.updateProduct(request, h);
  },
  response
}

exports.deleteProduct = {
  description: "Delete example for deleting product",
  tags: ['api'],
  plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
  },
  validate: ExampleValidation.deleteProduct,
  handler: (request, h)=>{
      return ExampleFactory.deleteProduct(request, h);
  },
  response
}

// For Email

exports.addData = {
  description: "POST example: Add Data to the list",
  tags: ['api','email'],
  plugins: {
  "hapi-swaggered": {
    responses: Response.responses,
  },
  },
  validate: ExampleValidation.addData,
  handler:(request, h)=>{
      return ExampleFactory.addData(request, h);
  },
  response
}
