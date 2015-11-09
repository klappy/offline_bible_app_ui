var Gateway_language_bible = {};
var request = require('request');


Gateway_language_bible.info =  function(authUser, body) {
	var gateway_language_bibles = {};
  request("http://172.17.42.1:32774/api/bibles", function (error, response, body) {
    if(error){
      return console.log('Error:', error);
    }
		var resJson = JSON.parse(body);
    console.log("##############");
    console.log(resJson);
    console.log("##############");
    var bibleId   = resJson[0]["bibleId"];
    var bibleUrl  = resJson[0]["bibleUrl"];
    var version   = resJson[0]["version"];
    var langCode  = resJson[0]["langCode"];

		gateway_language_bibles = {bibleId : bibleId, bibleUrl : bibleUrl, version : version, langCode : langCode }
    console.log(gateway_language_bibles);
  });
	return gateway_language_bibles;

  request({
      url: 'http://172.17.42.1:32774/api/bibles',
      method: 'POST',
      headers: {name: 'content-type', value: 'application/json'},
      // body: {}, function(error, response, body){
      //   if(error) {
      //       console.log(error);
      //   } else {
      //       console.log(response.statusCode, body);
      //   }
      // }
      });
}

module.exports = Gateway_language_bible;

