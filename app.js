var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
 
//Generate the main html page
app.get('/',function(req,res){
	res.sendFile(__dirname + '/public/index.html');
});

//Relevant for running on functions or openwhisk
app.post('/init', function (req, res) {
   console.log("init: " + res.body);
   res.status(200).send();       
});

//Relevant for running on functions or openwhisk
app.post('/run', function (req, res) {
   var meta = (req.body || {}).meta;
   var value = (req.body || {}).value;
   var payload = value.payload; 
   if (typeof payload != 'string')
      payload = JSON.stringify(payload);
   console.log("payload: " + payload);
   var result = { 'result' : { 'msg' : 'echo', 'payload' : payload} }; 
   res.status(200).json(result);
});
 
app.listen(8080, function () {
    console.log("listen on port 8080");
})
