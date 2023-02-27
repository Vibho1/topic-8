let request = require('request');

let apiKey = 'e4675d8cb4a907a4eeb587e561dacf07';
let location = 'melbourne';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}"`

request(url, function (err, response, body) {
if(err){
    console.log('error:', error);
} else {
    console.log('body:', body);
}
});