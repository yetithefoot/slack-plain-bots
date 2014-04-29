var execute = function(req, res, next) {
	res.send("Smart Enterprise Boobs Manager!");
};

module.exports = exports = function(router){
	router.get("/", execute);
};
