//Цикл WHILE

//for(начало;условие;шаг){
    //тело цикла}

//Практика
let str = "Я строка"
for(i = 0; i<=10; i++) {
    if(i===2) continue
    console.log(str)
}


let a = 0

while (a<=10) {
    console.log('Привет');
    a+=1;
}

//Практика 2
    
let n = 100
let m = 5
i = 0

while (n>m) {
    i += 1;
    n = n/2;
}
console.log(i);

//Практика 2

let N = 100;
let M = 5;

let availableCars = N;
let days = 0;

while (availableCars >= M) {
    availableCars /= 2;
    days++;
}

for (; availableCars >= M; days++) {
    availableCars /= 2;
}

console.log(days);

//Практика с годами

let c = 0
let cc = 0
for (let i = 1800; i<=2020; i++) {
    c++;
    if (i === 1961){
        console.log(c);
    }
    if (i%4===0){
        cc++;
    }
}
console.log(cc)

//Практика с годами

let start = 1800;
let end = 2020;
let v = 0
for(let i = start; i < end; i ++){
    if (i == 1961) {
        console.log("количество итераций: " + ((i-start)+1))
    }
    if ((i-start) % 4 === 0){
        v++
    }
}
console.log(v)

//Пример от лектора
let firstSpaceFlightYear = 1961;
let leapYearCount = 0;
let iterationsForFirstFlight = 0;
let iterationsForLeapYears = 0;

for (let year = 1800; year <= 2020; year++) {
    // Проверка на первый полет человека в космос
    iterationsForFirstFlight++    
    if (year === firstSpaceFlightYear) {
        console.log(iterationsForFirstFlight++);
    }

    // Проверка на високосный год
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        leapYearCount++;
    }
    
    iterationsForLeapYears++;
}
console.log(leapYearCount++);
