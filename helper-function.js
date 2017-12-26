var request = require('request');
var coords;

module.exports.getLatAndLong = function(address, callback){
    address = encodeURIComponent(address);
    var url = "http://maps.googleapis.com/maps/api/geocode/json?address=" + address;
    request({
        url : url,
        json: true,
    },(error,response, body) => {
        if(error){
            callback('Unable to connect to google servers')
        } else if(body.status === 'ZERO_RESULTS' || body.status === 'INVALID_REQUEST'){
        callback('No place found with the input')
    } else if(body.status = 'OK'){
        // console.log(body['results'][0]['geometry']['location']);
        coords =  body['results'][0]['geometry']['location'];
        callback(null, coords)
        // console.log(coords)
        // var b = JSON.stringify(body,undefined, 3)
        // console.log(b);
    }

}
)
}