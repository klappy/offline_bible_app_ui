var Gateway_language_bible = {};
var request = require('request');


Gateway_language_bible.info =  function(authUser) {

	// var gateway_language_bible = {};

	// request("https://staging-bible-api.sovee.com/api/bibles", function (error, response, body) {

	// 	console.log(error);
	// 	console.log(body + "i am in model class");

	// 	var resJson = JSON.parse(body);
	// 	gateway_language_bible = {bibleId:resJson['bibleId'], version:resJson['version'], language:resJson['language']};

	// });
	var gateway_language_bible = {bibleId:'bibleId', version:'version', language:'hindi'};
	return gateway_language_bible;
}


module.exports = Gateway_language_bible;
