// 1. Array elementlərinin cəmini / hasilini tapın

// let arr = [12, 23, 34]

// let cem = 0
// let hasil = 1

// for (let i = 0; i < arr.length; i++) {
//     cem += arr[i]
//     hasil *= arr[i]
// }
// console.log(cem, hasil);

// 2. Array elementlərinin içində təkrarlanan elementləri silin

// let arr = [1, 2, 2, 3, 4, 4, 5]
// let yeniArr = []

// for (let i = 0; i < arr.length; i++) {
//     if (yeniArr.indexOf(arr[i]) ==-1) {
//         yeniArr.push(arr[i])
//     }
// }
// console.log(yeniArr);

// 3. Array elementlərində ədəd olmayan elementləri silin.

// let arr = [1, "text", 2, "more text",5]
// let yeniArr = []

// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number') {
//         yeniArr.push(arr[i])
//     }
// }
// console.log(yeniArr);

// 4. Sözü tərsinə çevirən funksiya yaradın.

// let soz = "Salam"
// let ters = ""

// for (let i = soz.length - 1; i >= 0; i--) {
//     ters += soz[i] 
// }
// console.log(ters);

// 5. Cümləni tərsinə çevirən funksiya.

// let cumle = "Cümləni tərsinə çevirən funksiya"
// let sozler = cumle.split(" ")
// let ters = ""

// for (let i = sozler.length - 1; i >= 0; i--) {
//     ters += sozler[i] + " "
// }
// console.log(ters);

// 6. Daxil edilmiş ədədi sözlə yazan funskiya (Məs→ input :1, output : Bir )

// let input = +prompt("eded daxil edin:")

// const teklikler = ["bir", "iki", "uc", "dord", "bes", "alti", "yeddi", "sekkiz", "doqquz"]
// const onluqlar = ["on", "iyirmi", "otuz", "qirx", "elli", "altmis", "yetmis", "seksen", "dogsan"]

// if (input == 0) {
//     console.log("sifir");
// }
// else if (input == 100) {
//     console.log("yuz");
// }
// else if (input == 1000) {
//     console.log("min");
// }
// else {
//     let a = (input % 10) - 1
//     let b = ((Math.floor(input / 10)) % 10) - 1
//     let c = (Math.floor(input / 100)) - 1

//     if (input < 10) {
//         console.log(teklikler[a]);
//     }
//     else if (input < 100) {
//         if (input % 10 == 0) {
//             console.log(onluqlar[b]);
//         }
//         else {
//             console.log(onluqlar[b] + " " + teklikler[a]);

//         }
//     }
//     else {
//         console.log(teklikler[c] + "yuz " + onluqlar[b] + " " + teklikler[a]);
//     }
// }

// 7. Verilmiş ədədin tam ədəd olub olmadığını yoxlayan proqram yazın

// let eded = 7.5

// if(eded %1===0) {
//     console.log(`${eded} tam ededdir`);
// } else{
//     console.log(`${eded} tam eded deyil`);
// }

// 8. Verilmiş cümlədə sözlərin sayını tapın

// let cumle = "Verilmiş cümlədə sözlərin sayını tapın"

// let soz = cumle.split(" ")
// console.log(soz.length);

// 9. Verilmiş cümlədə artıq boşluq simvollarını silin

// let cumle = "    Verilmiş   cümlədə   artıq boşluq         simvollarını silin"
// let yenicumle = ""

// let soz = cumle.split(" ")
// // console.log(soz);

// for (let i = 0; i < soz.length; i++) {
//     if (soz[i] != "") {
//         yenicumle += soz[i] + " "
//     }
// }
// console.log(yenicumle);


// 10. Verilmiş mətndə cümlənin ilk sözündə olan baş hərfin böyük yazılmasını təmin edən proqram yazın

// let cumle = "verilmiş mətndə. cümlənin ilk. sözündə olan baş. hərfin böyük"
// let splitcumle = cumle.split(" ")
// let netice = ""

// for (let i = 0; i < cumle.length; i++) {
//     if (cumle[i - 2] == "." || i == 0) {
//         netice += cumle[i].toUpperCase()
//     }
//     else {
//         netice += cumle[i]
//     }
// }
// console.log(netice);


// 11. 2 arrayın eyniliyini yoxlayın

// let arr1 = [1, 5, 3, 4, 2, 5]
// let arr2 = [5, 4, 3, 2, 1, 5,]
// let count = 0

// if (arr1.length == arr2.length) {
//     for (let i = 0; i <= arr1.length - 1; i++) {
//         if (arr1.sort()[i] == arr2.sort()[i]) {
//             count++
//             }
//         }
//     if (count == arr1.length) {
//         console.log("eynidir");
//     }
//     else {
//         console.log("eyni deyil");
//     }
// }
// else {
//     console.log("eyni deyil");
// }

// 12. Array elementlərini sort metodundan istifadə etmədən artma / azalma istiqamətinə görə sıralayın

// let arr = [1, 3, 5, 2, 4]
// let arr2 = [1, 3, 5, 2, 4]
// let temp

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }

// for (let k = 0; k < arr2.length; k++) {
//     for (let q = k; q < arr2.length; q++) {
//         if (arr2[k] < arr2[q]) {
//             temp = arr2[k]
//             arr2[k] = arr2[q]
//             arr2[q] = temp
//         }
//     }
// }

// console.log(`${arr} artan`);
// console.log(`${arr2} azalan`);


// 13. Verilmiş mətndə «ADNA» sözlərini «ADNSU» sözü ilə əvəz edin

// let cumle = "Bakida ADNA -da oxuyanlar, ADNA bir univerisitetdir."

// console.log(cumle.replaceAll("ADNA", 'ADNSU'));

// 14. İşçilərin 1 saatlıq əmək haqqı və həftəlik iş saatları verildikdə, 
// aylıq əmək haqqınn hesablanması üçün proqram yazın. Həftəlik 40 saatdan artıq 
// olan iş saatları üçün əmək haqqı 2 qat hesablansın

// let heftelikIs = +prompt("nece saat islemisiz?")
// let elaveis = (heftelikIs - 40) * 4

// if (heftelikIs > 40) {
//     let artiqmaas = 40 * 2
//     console.log(`Heftelik maas: ${artiqmaas + elaveis} m`);
//     console.log(`Ayliq maas: ${(artiqmaas + elaveis) * 4} m`);
// }
// else {
//     let normalmaas = heftelikIs * 2
//     console.log(`Heftelik maas: ${normalmaas} m`);
//     console.log(`Ayliq maas: ${normalmaas * 4} m`);
// }


// 15. 3 rəqəmli ədədin rəqəmləri cəmini tapın

// let ed = 123

// let a = Math.floor(ed / 100)
// let b = (Math.floor(ed / 10)) % 10
// let c = ed % 10

// console.log(a + b + c);

// 16. Verilmiş 2 mətnin oxşarlıq əmsalını hesablayın. ( 3 ardıcıl sözün eyniliyinə əsasən)

// let cumle1 = "Salam menim adim Revan, soyadim Rehimlidir. Millisofda proqramlasdirma uzre tehsil aliram"
// let cumle2 = "Salam menim adim Gulhuseyn, soyadim Albaliyevdir. ADU-da Alman dili uzre tehsil aliram"

// let cumle1split = cumle1.split(" ")
// let say = 0

// text = ""

// for (let i = 0; i < cumle1split.length; i++) {
//     text = ""
//     if (i < cumle1split.length - 2) {
//         text = cumle1split[i] + " " + cumle1split[i + 1] + " " + cumle1split[i + 2]
//     }
// }
// if (text != "") {
//     if (cumle2.includes(text)) {
//         say++
//     }
// }

// if ((cumle1split.length - 2) * 0.2 <= say) {
//     console.log("plagiat");
// } else {
//     console.log("plagiat deyil");
// }


// 17. Verilmiş mətndə təkrarlana sözlərin sayını tapın

// let cumle = "tapin verilmiş mətndə təkrarlana sözlərin sayını tapin tapin"

// let cumleSplit = cumle.split(" ")

// let say

// for (let i = 0; i < cumleSplit.length; i++) {
//     say = ""
//     for (let j = 0; j < cumleSplit.length; j++) {
//         if (cumleSplit[i] == cumleSplit[j]) {
//             say++
//         }
//     }
// }
// console.log(say);







