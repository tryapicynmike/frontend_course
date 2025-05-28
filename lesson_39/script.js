let day = 3;
let dayname;
switch (day){
    case 1:
        dayname = "Monday"
        break;
    case 2:
        dayname = "Tuesday"
        break;
    case 3:
        dayname = "Wednesday"
         break;
    case 4:
        dayname = "Thursday"
        break;
    case 5:
        dayname = "Friday"
        break;
    case 6:
        dayname = "Saturday"
        break;
    case 7:
        dayname = "Sunday"
        break;
    default:
            dayname = "Invalid day";
}
console.log(dayname)
for (let i = 0; i < 5; i++){
    console.log("Результат цикла for", i);
}
let j = 0;
while (j < 5) {
    console.log("Результат цикла while",j);
    j++;
}
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 5);
let users = [
    {
        name:"Misha Tryapicyn",
        status:"active",
        total_sum:1500
    },
    {
        name:"Ivan Zolo",
        status:"blocked",
        total_sum:300
    },
    {
        name:"Oleg Mongol",
        status:"remote",
        total_sum:1750
    }
];
console.log(users);

console.log(users[0])

console.log(users[0].name)
let highspenders = [];
let blockedusers = [];
let totalusers = users.length;

for (user in users){
    if (users[user].total_sum > 1000){
        highspenders.push(users[user]);
    }

if (users[user].status == "blocked" || users[user].status == "remote"){
    blockedusers.push(users[user]);
    }
}
console.log("Пользователи которые потратили больше 1000 рублей",highspenders);

console.log("Заблокированные или удалённые",blockedusers);

console.log("Total users",totalusers)

console.log("Количество пользователей которые потратили больше 1000 рублей",highspenders.length);

console.log("Количество заблокированных пользователей",blockedusers.length);