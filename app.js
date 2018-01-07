var express = require('express');
var app = express();
var request = require('request');
var hbs = require('hbs');
var names = require('./utils/getNames');
var prices = require('./utils/getPrices');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

const listOfCoins = ['BTC', 'BCC', 'LTC', 'ETH', 'XRP', 'XLM'];
const imageBaseUrl = 'https://www.cryptocompare.com';

app.get('/', (req, res) => {
	setInterval(()=>{
		console.log('refreshed')
		names.getNamesOfCoins((error, data) => {
		var coinNamesDataInJson = JSON.parse(data);
		var coinsData = [];
		if(!error){
			listOfCoins.map((coinCode) => {
				if(coinNamesDataInJson.Data[coinCode]){
					coinsData.push({
						code: coinCode,
						name: coinNamesDataInJson.Data[coinCode]['FullName'],
						imageUrl: imageBaseUrl + coinNamesDataInJson.Data[coinCode]['ImageUrl'],
						totalCoins : coinNamesDataInJson.Data[coinCode]['TotalCoinSupply'],
					})
				}
			})
			prices.getPriceOfCoins(listOfCoins, coinsData, (error, data) => {
				res.render('home', {
					data
				})
			})
		}
	});
	}, 1000)
})

app.listen(3000, () => {
	console.log('App started on port 3000');
})