/*Задача 1*/
console.log('Задача 1: Вывести сумму чисел от 1 до N (пример: 5)')

let sum = 0
for(let i = 0; i<=5; i++){
    sum += i
}
console.log(sum)

/*-----------*/

/*let sum1 = 0
let i = 0
while(i <= 5){
    i++
    sum1 += i
}
console.log(sum1-i)*/


/*Задача 2*/
console.log('Задача 2: Вывести факториал числа N (пример: 5)')

let fact1 = 1
for(let i2 = 5; i2>=1; i2 --){
    fact1 *= i2
}

console.log(fact1)

/*-----------*/

/*let i1 = 5
let fact = 1
while(i1>=1){
    fact *= i1--
}
console.log(fact)*/


/*Задача 3*/
console.log('Задача 3: Вывести четные и нечетные числа от 1 до 100')

let evnum = 0
let oddnum = 0
while(evnum<100) {
    evnum++
    oddnum++
    if (evnum % 2 == 0){
        console.log('Четное число:', evnum)
    }
    if(oddnum % 2 != 0){
        console.log('Нечетное число:', oddnum)
    }
}


/*Задача 4*/
console.log('Задача 4: Вывести проверку на простое число')

let n = 10
let isPrime = true

if (n === 1){
    isPrime = false
}
else {
    for (let i = 2; i < n; i++){
        if (n % i == 0){
            isPrime = false
            break
        }
    }
}

if (isPrime){console.log(n, '- простое число')}
else {console.log(n, '- составное число')}


/*Задача 5*/
console.log('Задача 5: Вывести таблицу умножения для числа N (пример: 9)')

let n1 = 9

for (let i = 2; i <= 9; i++) {
    console.log(n1, 'умножить на ', i, ' равно ', n1*i)
}



console.log('Задача 6: Вывести сумму цифр числа N (пример: 322)')

/*Задача 6 не пошло

let a = 322
let b = 0

if (a === 0){
    console.log('сумма чисел равна 0')
}

for (let i = a; i > 0; i/10) {
    b += a%b
    console.log(b)
}*/

/*Задача 6 другой вариант*/

let N = 322; 
let sum1 = 0;

let digits = N.toString();

for (let i = 0; i < digits.length; i++) {
  sum1 += parseInt(digits[i]);
}

console.log("Сумма цифр числа " + N + " равна " + sum1);

/*Задача 7*/
console.log('Задача 7:Обратное число (пример: 322)')

let numb = 322
let reversedNumb = 0

while (numb > 0) {
    reversedNumb = reversedNumb * 10 + numb % 10
    numb -= numb % 10
    numb /= 10
}
console.log(reversedNumb)


/*Задача 8*/
console.log('Задача 8:Количество цифр в числе N (пример: 322)')

let num = 322
let str = String(num)
console.log(str.length)

/*Еще вариант*/

let numbb = 322
let count = 0
do {numbb /= 10; count ++} while (numbb >= 1)
console.log(count)

console.log('Задача 9:Проверка палиндрома для числа N (не готова)')

console.log('Задача 10:Сумма квадратов чисел от 1 до N (пример: 3)')

let numbbb = 3
let sqrt = 0
for (let count1 = 1; count1 <= numbbb; count1++) {
    sqrt += count1**2
}
console.log(sqrt)