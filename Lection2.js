/*Фунции

function имя (параметры){
    тело функции
}*/

//Практика

//const username = 'Nikita';
//const lastName = 'Isaev';

//function getUserName(username2, lastName2) {
    //return username2 + ' ' + lastName2 //обратить внимание: username2 и lastName2 - аргументы!
    
    //const fullName = username + lastName; //не участвует
    
    //return fullName; //не участвует
//}
//console.log(getUserName('Nikita', 'Isaev'))

//console.log(getUserName(username, lastName))

/*const fullName = 'Nikita' + ' ' + 'Isaev'
console.log(fullName)*/





/*Практика1

function getUserName(username){
    if (username === ''){
        username = 'Гость'
        console.log("Привет," + username);
    }
    else {
        console.log("Привет," + username);
    }
}
getUserName('');
getUserName('Иван')*/


/*function sayHi(name){
    if (name === undefined){
        console.log("Привет," + name)
    }
    else {
        console.log('Привет,' + name)
    } 
}
sayHi('Валерий');
sayHi()*/

/*Практика2

const n1 = 3
const degree = ''

function numdegree(n1, degree){
    if (degree === ''){
        degree = 1
    }
    return n1 ** degree
}

console.log(numdegree(n1, degree))*/

/*Еще*
function numdegree(n1, degree = 1){
    return n1 ** degree
}
console.log(numdegree(2,5))/


/*Синтаксис*/
/*Стрелочные функции*/

/*const username = () => (
    'sdf'
)

console.log(username());*/

//Или

/*const username1 = () => {return 'sdf'}

console.log(username1());

const username2 = () => {
    return (<div>
        <p>fsdrer</p>
    </div>)
}

console.log(username2());*/

//Напишите стрелочную функцию, 
//которая будет выводить переданную строку в консоль n раз


function stroka(stroka, n = 1) {
    for (let i = 1; i <= n; i++){
        console.log(stroka);
    }
    return 
}
stroka('gffd', 4)


const a = 'Привет'
const n = 3
function stroka(a, n) {
    let c = ''
    for (let i = 1; i <= n; i++){
        c += a
    }
    return c.toLowerCase(); //В нижний регистр
}
console.log(stroka(a, n));


let strokaNtimes = (stroka, N = 1) => {for(i = 0; i < N; i++){console.log(stroka)}};
strokaNtimes("Строка",3);


/*Регистры*/

const username = 'Dima'

function toLower(params) {
    return params.toLowerCase();
}
console.log(toLower(username))


let name1 = 'dima'
 function printString(name1) {
    firstLet = name1[0].toUpperCase();
    return firstLet + string.slice(1)}

console.log(printString(name1))

//----------------
const string = 'aaaaaaaa'

function printString (string) {
   firstLet = string[0].toUpperCase();
   return firstLet + string.slice(1)}

console.log(printString(string))

//---------------
let toUp = (stroka) => console.log(stroka[0].toUpperCase() + stroka.slice(1));
toUp('вася');


//---------------
let toLow = (stroka) => console.log(stroka[1].toLowerCase() + stroka.slice(0));
toLow('ДОБАЗАРИЛСЯ')



//---------------
let name3 = 'arthour'

function toUp1(name3){
    firstlet = name3[0].toUpperCase();
    firstlet += name3.slice(1); 
    return firstlet
}
console.log(toUp1(name3));

