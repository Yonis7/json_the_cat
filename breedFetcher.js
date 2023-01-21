const request = require("request");

const breedName = process.argv[2];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
  (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return console.log(`breed: ${breedName} not found`);
    }
    console.log(data[0].description);
  }
);
