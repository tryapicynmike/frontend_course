let students =  [
    {
        name:'Misha',
        age:18,
        grade:5,
    },
    {
        name:'Sasha',
        age:18,
        grade:4,
    },
    {
        name:'Roma',
        age:12,
        grade:5,
    },
    {
        name:'Gosha',
        age:13,
        grade:5,
    }
]

console.log(students)

console.log(students[0])

console.log(students[0].name)



let excellentstudents = students.filter(student => student.grade == 5)
let adultstudents = students.filter(student => student.age >= 18)
console.log('Список отличников',excellentstudents)

console.log('Список совершеннолетних учеников',adultstudents)

console.log('Общее кличество учеников',students.length)

console.log('Количество отличников', excellentstudents.length)

console.log('Количество совершеннолетних', adultstudents.length)