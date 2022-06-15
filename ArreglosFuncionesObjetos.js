// Objetos, arreglos y funciones

//Ejercicio 1: Promedio de un arreglo
const numbers=[5,3,2,4,7,2,1,9,7,7];
var prom=0;
for(let i=0; i<numbers.length;i++){
    prom=prom+numbers[i];
}
prom=prom/numbers.length;
console.log(prom);

//Ejercicio 2: Crear objeto de array
const car=[['brand', 'Nissan'], ['model','Versa'], ['year',2020]];
console.log(car[0][0].toString())

const carO={car}
console.log(carO)