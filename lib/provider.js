var request =  require('request');
var Global = require('../global.js');

sendSMS = (phonenumber, content, callback) =>{
  if(Global && (Global.providerURL.length * Global.providerCookie.length)==0)
    return callback("Missing provider info");
  
  var option = {
    method: "POST", 
    uri: Global.providerURL,
    headers: {
      'Cookie' : Global.providerCookie
    },
    form: "test_number="+phonenumber+"&name=Test&body="+content
  };

  var omCallback = (err, response, body)=>{
    if(err)
      callback(err)
    else
      callback(null, body);
  };

  request(option, omCallback);
};

module.exports = sendSMS;