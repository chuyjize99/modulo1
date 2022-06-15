//Ciclos y condicionales

//Condicional if
/*const speed=120
let message

if(speed>100){
    message="You're goinf too fast!"
} else{
    message="Under the limit"
}

console.log(message)

//Operador ternario
const message= speed>100 ? "You're toofast!" : "Under the limit"
console.log(message)*/

//Ejercicio 1: Horas del dia
const time=44;
let greeting;

if(time<12 && time>0){
    greeting="Good morning";
} else if(time<20){
    greeting="Good afternoon";
} else if(time>=20 && time<=24){
    greeting="Good evening";
} else{
    greeting="Invalid hour"
}
console.log(greeting)

//Ejercicio 2: imprimir pares de 0 hasta 100
for(let i=0; i<=100;i++){
    if(i%2==0){
        console.log(i+', ')
    }
}