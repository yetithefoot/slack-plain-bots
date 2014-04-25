var express = require('express');
var request = require("request");
var app = express();


app.get('/', function(req, res){
	res.send("Smart Enterprise Boobs Manager!");
});

app.post('/boobs', function(req, res) {

	function randomInt(high) {
		return Math.floor(Math.random() * high);
	}

	var boobsUrl = "http://api.oboobs.ru/boobs/" + randomInt(5000) + "/1/rank";
	request.get(boobsUrl, function(err, res) {

		var payload = {
			channel: "#general",
			username: "boobsbot",
			text: "http://media.oboobs.ru/" + JSON.parse(res.body)[0].preview
			// icon_emoji: ":ghost:"
		};

		// var url = "http://requestb.in/no93g5no";
		var url = "https://freechat.slack.com/services/hooks/incoming-webhook?token=Z89M3k3cnifutUcwSlmTz1Rp";

		request.post({
			url: url,
			body: JSON.stringify(payload)
		});

	});
	res.end();
});

app.listen(process.env.PORT || 5000);