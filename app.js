var yargs = require('yargs').argv;
var helper = require('./helper-function');
var wether = require('./get-weather-data')
var request = require('request')


var address = yargs.address;


helper.getLatAndLong(address)
    .then((result)=> {
    wether.getWeatherInfo(result)
    .then(
        (result) => {
            console.log(result);
})
}).catch(
    (errorMessage) => {
    console.log(errorMessage);
}
)
// helper.getLatAndLong(address, (errorMessage, results) => {
//     if(errorMessage){
//         console.log(errorMessage);
//     } else{
//         wether.getWeatherInfo(results, (errorMessage, wetherResults) => {
//         if(errorMessage){
//             console.log(errorMessage);
//         } else{
//             console.log(wetherResults.currently.temperature);
// // console.log(JSON.stringify(wetherResults, undefined, 2))
// }
// })
// }
// });