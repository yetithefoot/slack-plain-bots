var request = require("request");

var execute = function(req, res, next) {
	// console.dir(req);

	function randomInt(high) {
		return Math.floor(Math.random() * high);
	}

	var buttsUrl = "http://api.obutts.ru/butts/" + randomInt(5000) + "/1/rank";
	request.get(buttsUrl, function(err, response) {

		// post back
		var payload = {
			text: "http://media.obutts.ru/" + JSON.parse(response.body)[0].preview
		};

		res.send(JSON.stringify(payload));
		res.end();
	});
};

module.exports = exports = function(router){
	router.post("/butts", execute);
};
