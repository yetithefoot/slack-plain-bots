var request = require("request");

var execute = function(req, res, next) {
	// console.dir(req);

	// post back
	var payload = {
		text: "http://theoldreader.com/kittens/600/400?"+Date.now()
	};

	res.send(JSON.stringify(payload));
	res.end();

};

module.exports = exports = function(router){
	router.post("/cats", execute);
};
