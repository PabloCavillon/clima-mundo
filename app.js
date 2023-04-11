const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        descripcion: "Nombre de la ciudad a consultar el clima"
    }
}).argv;

console.log(argv.direccion);

const encodedUlr = encodeURI(argv.direccion);

console.log(encodedUlr);


const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php`,
    headers: {
        "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
        'x-rapidapi-key': 'ac54e04114msh8118b65d876f37bp10cdfajsn2e03e3647784',
        "useQueryString": true
    },
    qs: { location: 'New York' }
});



instance.get()
    .then(res => {
        console.log(res.data.Results[0]);
    })
    .catch(err => {
        console.log('ERROR!!!', err)
    });