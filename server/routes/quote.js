

/*
 * POST new quote
 */

exports.createNewQuote = function (db) {
	return function (req, res) {
        var collection = db.get('quotes');
        collection.insert(req.body, function (err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            }
            else {
				res.send("ok");
            }
        });

	};
};