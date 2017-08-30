var express = require('express');
var router = express.Router();
var fs = require('file-system');
var easyimg = require('easyimage');
var async = require('async');
var imageMagicHandler  = require('../utils/imageMagicHandler')

/* GET home page. */
router.get('/', function (req, res, next) {
    // will keep this in config file
    var dir = __dirname + '.\\..\\public\\images';
    var crouserArr = [];
    fs.readdir(dir, (err, files) => {
        async.forEach(files, function (item) { 
            var ImgArr = {};
            ImgArr.name = item;
            ImgArr.is3dImage = imageMagicHandler.is3dImage(dir,item);
            crouserArr.push(ImgArr)    
        }, function (err) {
           res.send({statusCode : 500, message : "Something went wrong" , description : "ERROR_EX" });
        });
         res.send({statusCode : 200, message : "Showing list of images" , data : crouserArr });
    });
});


module.exports = router;