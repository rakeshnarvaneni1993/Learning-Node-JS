var prices = require('./getPrices');

var sampleObjectWithNames = [
	{
		code: 'BTC',
		name: 'Bitcoin',
		imageUrl: 'Dummy URL',
		totalCoins : 33333,
	},
	{
		code: 'ETH',
		name: 'Etherum',
		imageUrl: 'Dummy URL',
		totalCoins : 33333,		
	}
]
describe('Checking the prices of coins', () => {
	it('Output object must contain price of the Coin', (done) => {
		prices.getPriceOfCoins(['BTC', 'ETH'],sampleObjectWithNames, (err, data) => {
			if(err){
				expect(typeof err).toBe('string');
				done();
			} else if(data){
				data.map((finalData) => {
					expect(finalData.totalCoins).toBe(33333);
					expect(typeof finalData.price).toBe('number');
					expect(finalData.price).toBeGreaterThan(0);
					done();
				});
			}
		});
	})
})
