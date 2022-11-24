const request = require('request');
const breedSearched = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedSearched}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.log(`ERROR: The website ${error.hostname} does not exist`);
    return;
  }
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log("ERROR: The breed you were searching for does not exist.");
  }
  if (data[0]) {
    console.log(data[0].description);
  }
});