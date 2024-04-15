// 1. Array əlavə tək yerdə duran elementləri ekrana verin

// let arr = ["a", "b", "c", 1, 2, 3, 4]

// for (let i = 1; i < arr.length; i+=2){
//     console.log(arr[i]);
// }

// 2. Array elementləri daxilində 5-ə bölünən ədədlərin sayı ekrana verin

// let arr = [4, 5, 10, 23, 26, 30, 50, 57]
// let say = 0

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 === 0) {
//         say++
//     }
// }
// console.log(arr);
// console.log(say);

// 3. Daxil olunan ədədin sadə və ya mürəkkəb köhnə uğunu tapan proqram tərtib edin.

let say = +prompt("eded daxil edin:")

for (let i = 1; i <= say; i++) {
    say = 0
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            say++
        }
    }
    if (say > 2 && i != 1) {
        console.log(`${say} - Murekkeb`);
    }
    else if (i != 1) {
        console.log(`${say} - Sade`);
    }
}

// 4. Array elementləri daxilində 7-ə bölünən sonuncu ədədi ekrana çıxarın.

// let arr = [4, 5, 10, 21, 23, 28, 26, 30, 50, 57, 67]

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 7 === 0){
//         console.log(arr[i]);
//     }
// }

// 5. Array elementləri daxilində ən və ən kiçik elementləri ekrana çıxaran proqram tamin

// 6. Massiv elementləri ən böyük və ən kiçik elementlərin yerini böyükn pro qram tərtib edin

// 7. əlavə ixtiyari ədədi ekrana çıxaran proqram tərtib edin

// 9. 1-dən 100-ə qədər ədəd birlik təkliyi 1 olan ədədləri ekrana verin

// 10. Daxil olmuş ifadənin polindrom olduğunu yoxlayın. (polindrom dedikdə tərsi və düzü eyni olan ifadə başa düşülür kimi ütü, 121,1331,4554 və s.)
// 11. Daxil edilmiş ikin anaqram olduğunu yoxlay ın ( anaqram dedikdə sözlərinin bərpasının eyni olması başa düşülür, yəni oslo solo və s.)
// 12 Daxil edilmiş iki eyniliklu arrayin yerdə duran elementlərinin hasilindən eyni olan yeni array yaradın. Məsələn [2,5] [3,6] yeni array [6,30]
// 13. Daxil edilmiş mətndə saitləri silən proqram yaradın
// 14. İstifadəçi daxil olan ədəd sayda ixtiyarı simvoldan string ifadə yaradın (məsələ input:5 output: qeg8d)
// 15 Ədədlərdən ibarət arrayin elementlərinin ədədi ortasını tapın
// 16. Daxil edilmiş sözdə neçə sait və samit olduğunu tapın ə dəd
// olub olmadığı yoxlayan metod yaradın (Mükəmməl ədədin özündən başqa qalan bütün tam bölənlərin cəmi əlavə olaraq olan əd ədə deyilir - məs: 6=1+2 +3; 28=1+2+4+7+14)
// 18. Daxil olunan ixtiyari ədədin rəqəmləri cəmini tapan funksiya yaradın
// 19. Substring metodunun işini yerinə yetirən funksiya yaradın
// 20. indexOf metodunun işini yerinə yetirən funksiya yaradın