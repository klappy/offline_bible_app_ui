var Gateway_language_bible = {};
var request = require('request');
var request = require('async');


Gateway_language_bible.info = function(callback) {
  var url = "http://172.17.42.1:32774/api/bibles";
  request(url, function(err, response, body) {
    console.log("helooooooo");
    if(err) {
     console.log(err);
     callback(true);
     return;
    }
    obj = JSON.parse(body);
    callback(false, obj);
  });
};

// Gateway_language_bible.info =  function(authUser, callback) {
// 	var gateway_language_bibles = {};
//   request("http://172.17.42.1:32774/api/bibles", function (error, response, body) {
//     if(error)
//       { console.log(err); callback(true);
//         return;
//     }else{
//       var resJson = JSON.parse(body);
//       callback(false, resJson);
//     }
// 		var gateway_language = {bible_list : resJson}
//     gateway_language_bibles = gateway_language.bible_list
//     console.log(gateway_language_bibles);
//   });
// 	return gateway_language_bibles;

//   request({
//       url: 'http://172.17.42.1:32774/api/bibles',
//       method: 'POST',
//       headers: {name: 'content-type', value: 'application/json'},
//       body: {}, function(error, response, body){
//         if(error) {
//             console.log(error);
//         } else {
//             console.log(response.statusCode, body);
//         }
//       }
//       });
// }

module.exports = Gateway_language_bible;

