let start = {
    name: 'Katia',
    age: 6,
    hobby: ['sleeping', 'swimming'],
    iq: 100,
}

function school(arg) {
    let afterSchool = start;
    for (i = 0; i <= 11; i++) {
        afterSchool.age = (start.age)+=1;
        afterSchool.iq = (start.iq) + 5;
        if (i % 6 == 0) {
            afterSchool.hobby.push('dancing');
        }
    }
    return afterSchool;

}

school(start);

function univer(arg) {
    let afterUniver = school(start)
    for (i = 0; i <= 6; i++) {
        afterUniver.age = (afterUniver.age)+=1;
        afterUniver.iq = (afterUniver.iq) + 2;
        if ((Math.random() * 10) > 5) {
            afterUniver.moveAbroad = true
        } else {afterUniver.marriage = true}
    }
    return afterUniver
}

console.log(univer(school(start)))
