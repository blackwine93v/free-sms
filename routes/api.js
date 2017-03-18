var express = require('express');
var router = express.Router();
var sendSMS = require('../lib/provider.js');

/* POST query to provider . */
router.post('/', function(req, res, next) {
  if(req.body && req.body.number && req.body.content){
    let number = req.body.number, content = req.body.content;

    /*Just for VN phone number, mark this block code to commentline if you want to send to other country SMS*/
    if(number[0]!=0){
      return res.json({"info": "Phone number must start with 0", "status": "failed", "code": 0});
    }else{
      number = "84"+number.substr(1); //"84" is phone number in VN
    }
    /*Just for VN phone number, mark this block code to commentline if you want to send to other country SMS*/
    sendSMS(number, content, (err, body)=>{
      if(err){
        return res.json({"info": err, "status": "failed","code": 0});
      }
      else if(!err&&body){
        return res.json({"info": body, "status": "success", "code": 1});
      }
    });

  }else{
    return res.json({"info": "Missing data", "status": "failed", "code": 0});
  }
});

router.get('/:number/:content', (req, res)=>{
  sendSMS(req.params.number, req.params.content, (err,body)=>{
    console.log(err,body);
    if(body) res.send('ok');
  });
})

module.exports = router;