const variant1 = 'Hello'

console.log(`${variant1}, world`);


/*const obj = {
    'name:1,
    '1':1,
    '1':1,
    '1':1,
    '1':1,
}

obj.name*/

const arr1 = [0,1,2,3]

/*console.log(arr1.length);*/


/*const arr2 = arr1.push(4)*/

/*console.log(arr2);*/

const arr2 = arr1.pop(4)

console.log(arr2)

console.log(12.18.toFixed(1)); /*Округление*/

/*Задача*/
const arr = [100, 1000, 12342, 4324, 6556, 345435]

arr.forEach((el) => {if(el >= 10000) console.log('Большая ЗП');
})
const result = arr.sort((el1, el2) => el1 > el2 ? -1: 1)[0];
/*console.log(arr[0]);*/
console.log(result);



const students = [
    {
        name: 'Ivan',
        age: 23,
    },
    {
        name: 'Julia',
        age: 25,
    },
    {
        name: 'Victor',
        age: 19,
    },
    {
        name: 'Vasya',
        age: 24,
    }
]
/*const result1 = students.filter((el) => el.age >= 20)*/

const i = students.map((el) => ({
    /*...el,       --- то же самое, что написано ниже*/
    name: el.name,
    age: el.age,
    status: el.age > 54 ? 'active' : 'ne active'
}))

console.log(i);


/*const res = []
for (let index = 0; index < students.length; index++) {
    if (students[index].age >=20) {
        res.push(students[index]);
    }
    
}
console.log(result1);*/



const me = {
    name: 'Kirill',
    age: 6,
    power: 2,
    friends: [
        'Katya',
        'Vasya'
    ]
}

const school = (obj) => {
    [...Array(11)].forEach(() => {
        obj.age++;
        obj.power ++
    })
    return obj
}

console.log(school(me));


const univer = (obj) => {
    [...Array(4)].forEach((_,i) => {
        obj.age++;
        obj.power ++

        if(i === 4 && Math.floor(Math.random() * 10) > 5){
            obj.wife = true
        }
    })
    return obj
}
console.log(univer(school(me)));