var request = require('request');
var data;

module.exports.getNamesOfCoins = (callback) => {
	request('https://www.cryptocompare.com/api/data/coinlist/', (error, request, body) => {
		if(error){
			callback('Names of coins not fetched');
		} else if(body.status === 'ZERO_RESULTS' || body.status === 'INVALID_REQUEST'){
       		callback('Names of coins not fetched')
        } else if(body.status = 'OK'){
        	callback(null, body);
   		}
	})
}