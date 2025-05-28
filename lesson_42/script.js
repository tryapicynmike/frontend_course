// let menu = {
//     coffee:150,
//     tea:100,
//     cake:300,
//     pastry:200,
//     sandwich:250,
// }

// function placeholder(orderlist){
//     let total = 0;
//     for (let item of orderlist){
//         if(menu[item]){
//             total += menu[item]
//         }else{
//             console.log(`Товар ${item} отсутствует в меню`);
//         }
//     }

//     if (total > 1000){
//         total*=0.9
        
//     }
// }
// let orderlist = ['coffee','tea','cake','pastry','sandwich'];
// let total = placeholder(orderlist);
// console.log(`Total score orderist: ${total} rubles`);
// console.log(`Chek: ${orderlist.join(',')}`);

let title = document.getElementById('title');
console.log(title.innerHTML)
let description = document.getElementsByClassName('description')
console.log(description[0].innerHTML)

let i_tag = document.getElementsByTagName('i')
console.log(i_tag[0].innerHTML)
console.log(i_tag[1].innerHTML)