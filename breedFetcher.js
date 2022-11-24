const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request.get(url, (error, response, body) => {
    if (error) {
      callback(error);
    }
    if (body) {
      const data = JSON.parse(body);
      if (data[0]) {
        const desc = data[0].description;
        callback(error, desc);
      } else {
        const error = "Breed does not exist";
        const desc = null;
        callback(error, desc);
      }
    }
  });
};

module.exports = { fetchBreedDescription };