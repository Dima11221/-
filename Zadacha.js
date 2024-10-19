const me = {
    name: 'Dima',
    age: 6,
    power: 10,
    intelligence: 5,
    friends: [
        'Katya',
        'Vasya',
    ],
}

/*const schoolfriends = (obj) => {
    [...Array(1)].forEach(() => {
        obj.friends.push('Lena',
            'Masha')
    })
    return obj
}*/

const school = (obj) => {
    [...Array(11)].forEach(() => {
        obj.age++;
        obj.power ++
        obj.intelligence ++
    })
    if (true) {
        obj.friends.push('Lena',
            'Masha')
    }
 
    return obj
}

const army = (obj) => {
    [...Array(2)].forEach((_,i) => {
        obj.age++;
        obj.power += 2
        obj.intelligence -= 2
    })
    if (true){
        obj.friends.push('Maga',
            'Gosha')
    }
    return obj
}


const univer = (obj) => {
    [...Array(4)].forEach((_,i) => {
        obj.age++;
        obj.power ++
        obj.intelligence += 2

        if(i === 4 && Math.floor(Math.random() * 10) > 4){
            obj.wife = true
        }
    })
    
    return obj
}
console.log(Math.floor(Math.random() * 10));
console.log(univer((army((school(me))))));