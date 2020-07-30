module.exports = Object.freeze({
    DUMMY_GET_RESPONSE:[
        {'id':101, 'date':'12/2/2019', 'comment':'Nice Bike'},
        {'id':102, 'date':'24/4/2019', 'comment':'Cool Glasses'},
        {'id':103, 'date':'5/3/2019', 'comment':'Lets Hangout...'},
        {'id':104, 'date':'18/2/2019', 'comment':'Lets Party'},
    ],
    CONTENT_TYPE: {
		JSON: "application/json",
		FORM: "application/x-www-form-urlencoded",
		FORM_DATA: "multipart/form-data",
		TEXT_XML : 'text/xml',
	},
	METHODS: {
		GET: "GET",
		POST: "POST",
		PUT: "PUT",
		DELETE: "DELETE",
	},
});