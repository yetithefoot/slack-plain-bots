var express = require('express');
var request = require("request");
var app = express();


app.get('/', function(req, res){
	res.send("Smart Enterprise Boobs Manager!");
});

app.post('/boobs', function(req, res) {
	console.dir(req);
	
	function randomInt(high) {
		return Math.floor(Math.random() * high);
	}

	var boobsUrl = "http://api.oboobs.ru/boobs/" + randomInt(5000) + "/1/rank";
	request.get(boobsUrl, function(err, response) {

		var payload = {
			text: "http://media.oboobs.ru/" + JSON.parse(response.body)[0].preview
		};

		res.send(JSON.stringify(payload));
		res.end();
	});
	
});

app.listen(process.env.PORT || 5000);