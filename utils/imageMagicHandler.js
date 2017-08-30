var imageMagicHandler = {};
var sizeOf = require('image-size');
//Return the bollean value depending upon the ratio of image
imageMagicHandler.is3dImage = function (dir, filename) {
    var dimensions = sizeOf(dir + "\\" + filename);
    console.log("sample  " + dimensions.width, dimensions.height)
    var dimensionRatio = dimensions.width / dimensions.height;
    dimensionRatio = Math.round(dimensionRatio * 100) / 100

    if (dimensionRatio > 1.90) {
        return true
    } else {
        return false
    }
};



module.exports = imageMagicHandler;