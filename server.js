var express = require('express');
var request = require("request");
var app = express();


app.get('/', function(req, res){
	res.send("Smart Enterprise Boobs Manager!");
});

app.post('/boobs', function(req, res) {
	console.dir(req);
	
	var backHost = (req.query && req.query.back_host) || "freechat.slack.com"; // chat to be use to back post to Slack
	var backToken = (req.query && req.query.back_token) || "Z89M3k3cnifutUcwSlmTz1Rp"; // token to be use for post back to Slack

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
		var url = "https://"+backHost+"/services/hooks/incoming-webhook?token="+backToken;

		request.post({
			url: url,
			body: JSON.stringify(payload)
		});

	});
	res.end();
});

app.listen(process.env.PORT || 5000);