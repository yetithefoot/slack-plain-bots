var request = require("request");

var execute = function(req, res, next) {
	// console.dir(req);

	function randomInt(high) {
		return Math.floor(Math.random() * high);
	}

	var boobsUrl = "http://api.oboobs.ru/boobs/" + randomInt(5000) + "/1/rank";
	request.get(boobsUrl, function(err, response) {

		// post back
		var payload = {
			text: "http://media.oboobs.ru/" + JSON.parse(response.body)[0].preview
		};

		res.send(JSON.stringify(payload));
		res.end();
	});
};

module.exports = exports = function(router){
	router.post("/boobs", execute);
};
