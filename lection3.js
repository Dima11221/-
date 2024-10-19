/*Напишите "if", аналогичный "switch"
важность: 5
Напишите if..else, соответствующий следующему switch:*/

const browser = 'Edge'

const getUserBrowser = (browser) => {
    if(browser === 'Edge'){
        console.log('You`ve got the Edge!');
        return
    }
    if(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === '' || browser === "Opera")
        console.log('We hope that this page looks ok!');
        return
}
getUserBrowser(browser)

/*const months = ['январь', 'февраль', 'март', 'апрель','май', 'июнь', 'июль', 'август','сентябрь', 'октябрь', 'ноябрь', 'декабрь']
const getMonthnumber = (n) => {
    if
}*/

/*Задача 0/*

const getMonthnumber = (n) => {
    if
}*/


/*Задача 1 - Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.*/
const getNumberName = (day) => {
    switch (day) {
        case 1:
            console.log('Понедельник');
            break;
        case 2:
            console.log('Вторник');
            break;
        case 3:
            console.log('Среда');
            break;
        case 4:
            console.log('Четверг');
            break;
        case 5:
            console.log('Пятница');
            break;
        case 6:
            console.log('Суббота');
            break;
        case 7:
            console.log('Воскресенье');
            break;
        default:
            console.log('Такого дня недели нет');
            
            break;
    }
}
getNumberName(3)

/*Задача 2 Написать функцию, которая принимает строку 
(в этом тексте 3-5 предложений), 
верните каждое первое слово в каждом предложении, через запятую.*/

const stroka = 'Hello my world'


/*Задача 3 Написать функцию, которой передаем имя,
и она возраващает приветствие
в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)*/

const getHello = (name) => {
    const hour = new Date().getHours()
    let Hitext = ''

    if(hour < 12 && hour > 5){Hitext = 'Доброе утро!'};

    if(hour > 12 && hour < 17){Hitext = 'Добрый вечер!'};

    if(hour > 0 && hour < 5){Hitext = 'Добрый вечер!'};

    return Hitext + '' + name
}

/*Задача 4 Вывести числа от 1 до 100 в столбец.
К каждой цифре подписать состояние возраста
(1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый).
Например. 33 - зрелый*/

function getRawWState(n) {
    if (n >= 0 && n <= 17) return 'Юный'
    if (n > 17 && n <= 30) return 'Молодой'
    if (n > 30 && n <= 55) return 'Зрелый'
    if (n > 55) return 'старый'

    return 'Ошибка'
}
console.log(getRawWState(12));


/*Задача 5*/

function getRawWState(n, name1) {
    let ageType = ''

    if (n >= 0 && n <= 17) ageType = 'Ребенок'
    if (n > 17 && n <= 30) ageType = 'Молодой'
    if (n > 30 && n <= 55) ageType = 'Зрелый'
    if (n > 55) ageType = 'старый'
    
    if (ageType === '') {
        return 'Ошибка'}
    
    return getRawWState(name1) + 'вы' + ageType + 'человек'
}
console.log(getRawWState(12, 'Иван'));



/*Общая задача*/
const getGreeting = (name) => {
    const hour = new Date().getHours() /*Текущая дата*/
    let Hitext = ''

    if (hour >= 5 && hour <= 12) {Hitext = 'Доброе утро'}

    if (hour > 12 && hour <= 17) {Hitext = 'Добрый день'}

    if (hour > 17 && hour <= 0) {Hitext = 'Добрый вечер'}

    if (hour > 0 && hour < 5) {Hitext = 'Доброй ночи'}

    return Hitext + ' ' + name
}

function getRawWState(n, name) {
    let ageType = '';

    if (n >= 0 && n <= 17) ageType = 'Ребенок'
    if (n > 17 && n <= 30) ageType = 'Молодой'
    if (n > 30 && n <= 55) ageType = 'Зрелый'
    if (n > 55) ageType = 'старый'
    
    if (ageType === '') {
        return 'Ошибка'}
    
    return getGreeting(name) + ' вы ' + ageType + ' человек'
}
console.log(getRawWState(16, 'Иван'));



/*Задача Требуется написать функцию, выводящую в консоль числа от 1 до n,
где n — это целое число, которая функция принимает в качестве параметра,
с такими условиями:

вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.*/

const getValue = (n) => {
    if(n <= 1){
        console.log('Error');
        return;
    }
    for (let index = 1; index <= n; index++) {
        if (index % 3 === 0 && index % 5 === 0) {
            console.log('fizzbuzz');
            continue;
        };
        if (index % 3 === 0) {
            console.log('fizz')
            continue;
        };
        if (index % 5 === 0) {
            console.log('buzz')
            continue;
        };
        console.log(index);
        
    }
}

getValue(16)


/*Еще Задача*/
const fizzBuzz = (n) => {
    if (n < 0) {
      return '';
    }
  
    for (let i = 0; i <= n; i += 1) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  };
fizzBuzz(15)