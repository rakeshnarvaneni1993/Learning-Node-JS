var names = require('./getNames');


listOfTestCoins = ['BTC', 'ETH', 'LTC'];

describe('Checking the Datatypes', () => {
	it('Should give the correct data type of cryptocurrencies data that is returned', (done) => {
		names.getNamesOfCoins((error, data) => {
			if(error){
				expect(typeof error).toBe('string');
				done();
			} else{
				expect(typeof JSON.parse(data)).toBe('object');
				done();
			}
		})
	})	
})


describe('CHecking if API return coins data', () => {
	it('Should return data of test coins', (done) => {
		names.getNamesOfCoins((error, data) => { 
			if(error){
				expect(typeof error).toBe('string');
				done();
			} else{
				listOfTestCoins.map((coin) => {
					expect(JSON.parse(data)['Data'][coin]['Name']).toBe(coin);
					done();
				})
	 		}
	 })
	})
});

