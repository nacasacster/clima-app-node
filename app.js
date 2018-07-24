const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    //  console.log(direccion);
    let coors = await lugar.getLugarLatLng(argv.direccion);
    console.log(coors.lat);
    console.log(coors.lng);
    let temp = await clima.getClima(coors.lat, coors.lng);

    return `El clima en ${coors.direccion} es de ${temp}`;
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));