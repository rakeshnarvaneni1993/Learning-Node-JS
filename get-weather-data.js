var request = require('request')

module.exports.getWeatherInfo = (results, callback) => {
    var lat = results.lat;
    var long = results.lng;
    const apiKey = '31c0982f35bddce8e438e20b3782078d';
    var url = `https://api.darksky.net/forecast/${apiKey}/${lat},${long}`
    console.log(url);
    request({
        url: url,
        json: true,
    }, (error, response, body) => {
        if(error){
            callback('Unable to connect to google servers')
        } else if(body.status === 'ZERO_RESULTS' || body.status === 'INVALID_REQUEST'){
        callback('No place found with the input')
    } else if(body.status = 'OK'){
        callback(null, body);
    }
})
}