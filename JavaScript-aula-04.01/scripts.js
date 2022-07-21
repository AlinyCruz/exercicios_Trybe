
// const myName = "Aline Cruz"
// const birthCity = "São Paulo"
// let birthYear = 1989

// console.log(myName)
// console.log(birthCity)
// console.log(birthYear)

// birthYear = 2030
// console.log(birthYear)

// birthCity = "Bahia";
// console.log(birthCity)
//---------------------------------------------------------//
// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId);
// console.log(typeof isEnrolled);
// console.log(typeof patientInfo);
// console.log(typeof patientEmail);
//---------------------------------------------------------//
// const base = 5;
// let height = 8;

// let area = base * height;

// console.log(area);

// let lado1 = 4;
// let lado2 = 2;
// let lado3 = lado1;
// let lado4 = lado2;

// const perimeter = lado1 + lado2 + lado3 + lado4;

// console.log(perimeter);
//----------------------------------------------------------//
// const nota = 8;

// if (nota >= 80) {
//     console.log ("Parabéns, você foi aprovada(o)!");
// } 
// else if (nota < 80 && nota >= 60) {
//     console.log("Você está na nossa lista de espera");
// }
// if (nota < 60) {
//    console.log("Você foi reprovada(o)");
// }
//----------------------------------------------------------//
// const altura = 1.49

// if (altura >= 1.50){
//     console.log ("Pode entrar no brinquedo");
// }
// else if (altura < 1.50 && altura >= 1.48 ){
//     console.log ("Verificar a possibilidade");
// }
// else {
//     console.log("Não pode entrar");
// }
//----------------------------------------------------------//

const currentHour = 19;

let message = "";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir"; 
    console.log (message);   
} 

else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
    console.log (message);
} 
else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
    console.log (message);
} 
else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!";
    console.log (message);
} 
else {
    message = "Hmmm, cheiro de café recém passado";
    console.log (message);
} 