var request = require('request');
var coords;

module.exports.getLatAndLong = function(address, callback) {
    return new Promise((resolve, reject) => {
            address = encodeURIComponent(address);
    var url = "http://maps.googleapis.com/maps/api/geocode/json?address=" + address;
    request({
        url: url,
        json: true,
    }, (error, response, body) => {
        if(error){
            reject('Unable to fetch data');
        } else if(body.status === 'ZERO_RESULTS' || body.status === 'INVALID_REQUEST'
    )
    {
        reject('Unable to fetch data');
    }
    else
    if (body.status = 'OK') {
        coords = body['results'][0]['geometry']['location'];
        resolve(coords);
    }
})
        })

}