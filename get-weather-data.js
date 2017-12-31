var request = require('request')

module.exports.getWeatherInfo = (results, callback) => {

    return new Promise(
        (resolve, reject) => {
            var lat = results.lat;
            var long = results.lng;
            const apiKey = '31c0982f35bddce8e438e20b3782078d';
            var url = `https://api.darksky.net/forecast/${apiKey}/${lat},${long}`
            request({
                url: url,
                json: true,
            }, (error, response, body) => {
                if(error){
                    reject('Unable to connect to google servers')
                } else if(body.status === 'ZERO_RESULTS' || body.status === 'INVALID_REQUEST'){
                reject('No place found with the input')
            } else if(body.status = 'OK'){
               resolve(body.currently.temperature);
            }
        })
        }
    );

}