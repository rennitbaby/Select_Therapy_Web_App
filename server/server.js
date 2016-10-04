(function() {
	'use strict';
//Set Up
// need to read more about express and its functions. 10/01/2016
var fs = require('fs'); //requiring fileSystem
var express = require('express'); //requiring the express module
var path = require('path'); //requiring the path module for pdf path resolving
var app = express(); //creating our application with express
var port = process.env.PORT || 8080; //set the port
//Configuration
app.use(express.static("../client")); //setting up the static file location
//GET REQUESTS FOR PDF FILES
app.get('/About/:id', function(req, res) {
	var id = req.params.id; //grabbing the ID, ie: School_Catalog
	console.log(id);//Terminal logs: School_Catalog
	console.log(req.url);
	var filename = __dirname + '/../client/app/About/' + id + '/' + id + '.pdf';
	var PDFReadstream = fs.createReadStream(filename);
	res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
	res.setHeader('Content-type', 'application/pdf');
	PDFReadstream.pipe(res);
	/*fs.readFile(__dirname + '../client/app/About/School_Catalog/School_Catalog.pdf', function(err, data) {
		if (err)
			res.json({'status':'error', msg:err});
		else{
		 	res.setHeader('content-type', 'application/pdf');
		 	res.send(data);
		}
	});*/
});
//listen (starting our application with node server.js)
app.listen(port, console.log('magic happens on port: ', port));
}());