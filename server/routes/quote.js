/*
 * POST new quote
 */

exports.createNewQuote = function(db) {
    return function(req, res) {
        var collection = db.get('quotes');
        collection.insert(req.body, function(err, doc) {
            if (err) {
                res.send("There was a problem adding the information to the database.");
            } else {
                res.send("ok");
            }
        });

    };
};

exports.quotes = function(db) {
    return function(req, res) {
        var collection = db.get('quotes');
        collection.find({}, {}, function(e, docs) {
            res.send(docs);
        });
    };
};