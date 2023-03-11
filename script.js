const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
  params: {city: 'Seattle'},
  headers: {
    'X-RapidAPI-Key': 'd5b3707067msh0de98206b9ca0dap13b8dfjsn506df6fb1a68',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});