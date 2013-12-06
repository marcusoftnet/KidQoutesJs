

/*
 * POST new quote
 */

exports.createNewQuote = function (db) {
	return function (req, res) {

		var name = req.body.name;
		var kidName = req.body.kidname;
        var quote = req.body.text;
        var saidAt = req.body.saidat;

        console.log("About to add: " + kidName);
        console.log("About to add: " + quote);

        var collection = db.get('quotes');

        collection.insert({
            "name" : kidName,
            "quote" : quote,
            "saidAt" : saidAt
        }, function (err, doc) {
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