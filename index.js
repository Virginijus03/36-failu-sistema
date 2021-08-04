
const _data = require('./lib/data');

const helpers = require('./lib/helpers')

// _data.read('users', 'petras', (err, data) => {
//     if (err || !data) {
//         console.log('Nepavyko perskaityti failo...');
//         return false;
//     }
//     console.log(data);
//     const obj = helpers.parseJson(data);
//     console.log(obj);
// })


// const pazymiai = [10, 2, 8, 4, 6, 'vairuoja'];
// _data.create('marks', 'Antanas', pazymiai, (err) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }

//     console.log('Failas sekmingai sukurtas!');

//     _data.read('marks', 'Antanas', (err, data) => {
//         if (err || !data) {
//             console.log('Nepavyko perskaityti Gintare failo...');
//             return false;
//         }

//         console.log(data);
//         const obj = helpers.parseJson(data);
//         console.log(obj);
//     })
// });
// const petras = {
//     name: 'Petras',
//     age: 99,
//     car: 'Audi',
//     color: 'yellow'
// }

// _data.update('users', 'petras', petras, (err) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }

//     console.log('Petro duomenys atnaujinti sekmingai.');

//     _data.read('users', 'petras', (err, data) => {
//         if (err || !data) {
//             console.log(err);
//             console.log(data);
//             console.log('Nepavyko perskaityti Petro failo...');
//             return false;
//         }
//         console.log(data);
//         const obj = helpers.parseJson(data);
//         console.log(obj);
//     })
// })
// _data.delete('marks', 'Martyna', (err) => {
//     if (err) {
//         console.log(err);
//         return false;
//     }
//     console.log('Faila pavyko pasalinti sekmingai.');
// })
// _data.list('marks', (err, data) => {
//     if (err || !data) {
//         console.log(err);
//         return false;
//     }
//     console.log(data);
// })
// const zodis = 'Labas rytas';
// const uzsifruotasZodis = helpers.hash(zodis);

// console.log(zodis);
// console.log(uzsifruotasZodis);


// const zodis1 = 'Labas rytat';
// const uzsifruotasZodis1 = helpers.hash(zodis1);

// console.log(zodis1);
// console.log(uzsifruotasZodis1);


// const zodis2 = 'Labas rytat';
// const uzsifruotasZodis2 = helpers.hash(zodis2);

// console.log(zodis2);
// console.log(uzsifruotasZodis2);