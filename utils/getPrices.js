var request = require('request');

module.exports.getPriceOfCoins = (listOfCoins, names, callback) => {
	var coins = listOfCoins.join(',');
	var url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coins}&tsyms=USD`;
	request(url, (error, response, body) => {
		if(error){
			callback('Prices of coins not fetched');
		} else if(body.status === 'ZERO_RESULTS' || body.status === 'INVALID_REQUEST'){
       		callback('Prices of coins not fetched')
        } else if(body.status = 'OK'){
        	var pricesDataInJson = JSON.parse(body);
			for(i=0;i<names.length;i++){
				if(pricesDataInJson[names[i].code]){
					names[i].price = pricesDataInJson[names[i].code].USD;
				}
			}
			callback(null, names);
        }
	})
}