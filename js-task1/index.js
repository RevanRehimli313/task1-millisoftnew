// 1.	İstifadəçi tərəfindən daxil edilən ədədin cüt olub-olmadığını yoxlayın.
// (Məsələn istifadəçi 12 daxil etdiyi zaman ekrana cütdür, 15 daxil etdiyi zaman təkdir çıxarsın)

// let number = +prompt("reqem daxil et:")
// if (number % 2 === 0) {
//     alert(` ${number} Cut ededdir`)
// }
// else {
//     alert(` ${number} Tek ededdir`)
// }

// 2.	Verilmiş 3 ədəddən ən böyük və ən kiçiyini tapın.

// let ed1 = +prompt("eded daxil edin")
// let ed2 = +prompt("eded daxil edin")
// let ed3 = +prompt("eded daxil edin")

// console.log(Math.max(ed1, ed2, ed3) + " en boyuk");
// console.log(Math.min(ed1, ed2, ed3) + " en kicik");

// ----------------------------

// if(ed1 > ed2 && ed1 > ed3){
//     console.log(`${ed1} en boyuk.`);
// } else if(ed2 > ed1 && ed2 > ed3){
//     console.log(`${ed2} en boyuk.`);
// } else {
//     console.log(`${ed3} en boyuk`);
// }

// if(ed1 < ed2 && ed1 < ed3){
//     console.log(`${ed1} en kicik.`);
// } else if(ed2 < ed1 && ed2 < ed3){
//     console.log(`${ed2} en kicik.`);
// } else {
//     console.log(`${ed3} en kicik.`);
// }

// -----------------------------------------

// 3.	1-dən 10-a qədər ədədlərin cəmini və hasilini tapın.

// let cem = 0;
// let hasil = 1

// for (let i = 1; i <= 10; i++) {
//     cem += i;
//     hasil *= i;
// }

// console.log('ededin cemi:', cem);
// console.log('ededin hasili:', hasil);

// ------------------------------------------

// 4.	1-dən 100-ə qədər cüt ədədləri, onların cəmini və hasilini tapın.

// let cem = 0
// let hasil = 1

// for (i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         cem = cem + i
//         hasil = hasil * i
//         console.log(i);
//     }
// }

// console.log('ededin cemi:', cem)
// console.log('ededin hasili:', hasil)


// 5.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın.


// for (let i = 100; i <= 999; i++) {
//     if (i % 7 === 0 && i % 8 === 0) {
//         console.log(`${i} 7 ve 8e bolunur`);
//     };
// }

// 6.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın.

// let cem = 0

// for (let i = 100; i <= 999; i++) {
//     if (i % 7 === 0 && i % 8 === 0) {
//         cem = cem+i
//     };
// }

// console.log(cem);


// 7.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın.

// let ilk = 0

// for (let i = 100; i <= 999; i++) {
//     if (i % 7 === 0 && i % 8 === 0) {
//         // console.log(`${i} 7 ve 8e bolunur`);
//         console.log(i);
//         ilk = i.length(1)
//     };
// }

// 8.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən son ədədi tapın.

// let sonuncu

// for (let i = 100; i < 1000; i++) {
//     if(i % 7 === 0 && i % 8 === 0){
//         sonuncu = i
//     }
// }
// console.log(sonuncu);

// 9.	3 rəqəmli ədədlərin ədədi ortasını tapın.

// let cem = 0
// let say = 0
// let edediorta = 0

// for (let i = 100; i < 1000; i++) {
//     cem += i
//     say++
// }
// edediorta = cem / say
// console.log(cem);
// console.log(edediorta);

// 10.	İstifadəçidən iki rəqəm və bir riyazi əməl daxil etməsini təmin edin və
//  həmin ədədlər üzərində daxil olunmuş riyazi əməli tətbiq edib nəticəni ekrana çıxarın.

// let ed1 = +prompt("eded daxil edin")
// let operand = prompt("operand daxil edin")
// let ed2 = +prompt("eded daxil edin")

// switch (operand) {
//     case "+":
//         alert(ed1 + ed2);
//         break;
//     case "-":
//         alert(ed1 - ed2);
//         break;
//     case "*":
//         alert(ed1 * ed2)
//         break;
//     case "/":
//         alert(ed1 / ed2)
//         break;
//     case "**":
//         alert(ed1 ** ed2)
//         break;
//     default:
//         alert("teyin olunmayib")
//         break
// }

// 11.	Daxil edilmiş ədədin bölünəni olan bütün 3 rəqəmli ədədləri çıxarın.

// let eded = +prompt("eded daxil edin")

// for (i = 100; i <= 999; i++) {
//     if (i % eded === 0) {
//         console.log(i);
//     }
// }


// 12.	Daxil edilmiş ədədin bütün mümkün tam bölənlərini tapın.

// let eded = +prompt("eded daxil edin")

// for (i = 0; i <= eded; i++) {
//     if (eded % i === 0) {
//         console.log(i);
//     }
// }


// 13.	1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın.

// let say = 0

// for (i = 1; i <= 100; i++) {
//     say = 0
//     for (j = 1; j <= i; j++) {
//         if (i % j === 0) {
//             say++
//         }
//     }
//     if (say > 2 && i != 1) {
//         console.log(`${i} - Murekkeb`);
//     }
//     else if (i != 1) {
//         console.log(`${i} - Sade`);
//     }
// }

// 14.	12 ədədi hansı 2 ədədin cəmi ola bilər? ( Bütün kombinasiyaları tapın)

// for (i = 1; i <= 12; i++) {
//     for (j = i; j <= 12; j++) {
//         if (i + j === 12) {
//             console.log(`${i} + ${j} = 12`);
//         }
//     }
// }

// 15.	İki dəyişənin dəyərlərininin yerini dəyişən proqram tərtib edin.
// (Məsələn x=5, y=6, => x=6, y=5)

// let x = 5
// let y = 6

// let temp = x
// x = y
// y = temp

// console.log(x);
// console.log(y);