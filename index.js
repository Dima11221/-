console.log('----------')
console.log('asd')


const userAge = 16;

if (userAge > 18) {
    console.log('Пользователю больше или равно 18 лет'); //true
} else if (userAge === 18) {
    console.log('Пользователю 18 лет');
} else {
    console.log('Пользователю меньше 18 лет'); //true
}


// Условный оператор
const isuserAge = (userAge >= 18) ? 18 : 'не 18'

console.log(isuserAge);


//Практика 1

let t2 = -40;

if (t2 <= -30) {
    console.log('СИДИТЕ ДОМА!');
} else {
    console.log('Можно гулять');
}

//Практика 2
let t1 = -21

if (-10 >= t1 >= -30) {
    console.log('СИДИТЕ ДОМА!');
} else {
    console.log('Можно гулять');
}
//-----------
if (-10 >= t1 > -30) {
    console.log ('Сегодня холодно')
} else {
    console.log ('Можно выходить')
}

//Практика 3

if (null || 0 || "" || undefined) {
    console.log('1')
}

//Цикл WHILE

//for(начало;условие;шаг){
    //тело цикла}

for(let i = 0; i<=3; i++) {
    if(i===2) continue
    console.log(i)
}

//Практика

const str = 'String'
for (i = 0; i<=10; i++) {
    console.log(str)
} 