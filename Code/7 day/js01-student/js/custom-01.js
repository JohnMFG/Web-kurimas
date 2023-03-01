/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
let firstName = "Jonas"
let lastName = "Mažeika"
let dateOfBirth = 2000
let now = new Date().getFullYear()

console.log("As esu " + firstName + " " + lastName + ". Man yra " + (now - dateOfBirth) + " metai(-ų)")

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
let a = Math.floor(Math.random() * (4 - 0 + 1) + 0)
let b = Math.floor(Math.random() * (4 - 0 + 1) + 0)
let min = Math.min(a, b)
let max = Math.max(a, b)
console.log("Skaiciai: " + a + " " + b)

if (a == 0 || b == 0) {
    console.log("Vienas is skaiciu yra 0!")
} else {
    console.log((max / min).toFixed(2))
}

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/
console.log("-------")
a = Math.round(Math.random() * 25)
b = Math.round(Math.random() * 25)
let c = Math.round(Math.random() * 25)
min = Math.min(a, b, c)
max = Math.max(a, b, c)
console.log("Skaiciai: " + a + " " + b + " " + c)
if (a == b || a == c || b == c) {
    console.log("Keli skaiciai sutampa!")
} else if (a > min && a < max) {
    console.log("Vidurinis saicius:" + a)
} else if (b > min && b < max) {
    console.log("Vidurinis saicius:" + b)
} else {
    console.log("Vidurinis saicius:" + c)
}




/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. dvieju krastiniu suma turi buti didesne uz 3 krastines
*/
console.log("-------")
kr1 = Math.floor(Math.random() * (10 - 1 + 1) + 1)
kr2 = Math.floor(Math.random() * (10 - 1 + 1) + 1)
kr3 = Math.floor(Math.random() * (10 - 1 + 1) + 1)
console.log("Krastines: " + kr1 + " " + kr2 + " " + kr3)
if (((kr1 + kr2) > kr3) && ((kr1 + kr3) > kr2) && ((kr2 + kr3) > kr1)) {
    console.log("Trikampis imanomas")
} else {
    console.log("Trikampis neimanomas")
}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
console.log("-------")
a = Math.floor(Math.random() * (2 - 0 + 1) + 0)
b = Math.floor(Math.random() * (2 - 0 + 1) + 0)
c = Math.floor(Math.random() * (2 - 0 + 1) + 0)
let d = Math.floor(Math.random() * (2 - 0 + 1) + 0)
console.log("Skaiciai: " + a + " " + b + " " + c + " " + d)
let zeros = 0;
let ones = 0;
let twos = 0;

if (a == 0) {
    zeros++
} else if (a == 1) {
    ones++
} else {
    twos++
}

if (b == 0) {
    zeros++
} else if (b == 1) {
    ones++
} else {
    twos++
}

if (c == 0) {
    zeros++
} else if (c == 1) {
    ones++
} else {
    twos++
}

if (d == 0) {
    zeros++
} else if (d == 1) {
    ones++
} else {
    twos++
}

console.log("Nuliai: " + zeros + "; Vienetai: " + ones + "; Dvejatai: " + twos)


/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
console.log("-------")
a = Math.floor(Math.random() * (10 - -10 + 1) + -10)
b = Math.floor(Math.random() * (10 - -10 + 1) + -10)
c = Math.floor(Math.random() * (10 - -10 + 1) + -10)
console.log("Skaiciai: " + a + " " + b + " " + c)

if (a < 0) {
    console.log(`[${a}]`)
} else if (a == 0) {
    console.log(`(${a})`)
} else {
    console.log(`{${a}}`)
}

if (b < 0) {
    console.log(`[${b}]`)
} else if (b == 0) {
    console.log(`(${b})`)
} else {
    console.log(`{${b}}`)
}

if (c < 0) {
    console.log(`[${c}]`)
} else if (c == 0) {
    console.log(`(${c})`)
} else {
    console.log(`{${c}}`)
}

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/
console.log("-------")
let candles = Math.floor(Math.random() * (3000 - 5 + 1) + 5)
let sum = 0

if (candles > 2000) {
    sum = candles * 0.96
    console.log(`Zvakiu kiekis: ${candles}, kaina: ${sum.toFixed(2)}`)
} else if (candles > 1000) {
    sum = candles * 0.97
    console.log(`Zvakiu kiekis: ${candles}, kaina: ${sum.toFixed(2)}`)
} else {
    console.log(`Zvakiu kiekis: ${candles}, kaina: ${candles}`)
}


/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
console.log("-------")
a = Math.round(Math.random() * 100)
b = Math.round(Math.random() * 100)
c = Math.round(Math.random() * 100)
console.log("Skaiciai: " + a + " " + b + " " + c)
let average = (a + b + c) / 3
average = Math.round(average)

if ((a < 10 || a > 90) && (b < 10 || b > 90) && (c < 10 || c > 90)) {
    console.log(`Abu vidurkiai sutampa: ${average}`)
} else if ((a < 10 || a > 90) && (b < 10 || b > 90)) {
    console.log(`Pirmmas vidurkis: ${average}, antras vidurkis: ${Math.round((a+b)/2)}`)
} else if ((a < 10 || a > 90) && (c < 10 || c > 90)) {
    console.log(`Pirmmas vidurkis: ${average}, antras vidurkis: ${Math.round((a+c)/2)}`)
} else if ((b < 10 || b > 90) && (c < 10 || c > 90)) {
    console.log(`Pirmmas vidurkis: ${average}, antras vidurkis: ${Math.round((b+c)/2)}`)
} else {
    console.log(`Imanomas tik pirmas vidurkis: ${average}`)
}

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/
console.log("-------")
let h = Math.round(Math.random() * 12)
let m = Math.round(Math.random() * 60)
let s = Math.round(Math.random() * 60)
let additionalSeconds = Math.round(Math.random() * 300)
console.log(`Papildomas laikas: ${additionalSeconds}s`)
console.log(`Pradinis laikas: ${h}h : ${m}m : ${s}s`)

let totalSeconds = h * 3600 + m * 60 + s + additionalSeconds
let finalH = Math.floor(totalSeconds / 3600)
let finalM = Math.floor((totalSeconds - finalH * 3600) / 60)
let finalS = totalSeconds - finalH * 3600 - finalM * 60

console.log(`Pakeistas laikas: ${finalH}h : ${finalM}m : ${finalS}s`)


/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/
console.log("-------")
a = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
b = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
c = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
d = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let e = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let f = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
console.log(`Pradine seka: ${a} ${b} ${c} ${d} ${e} ${f}`)

let firstNum = 0
let secondNum = 0
let thirdNum = 0
let fourthNum = 0
let fifthNum = 0
let sixthNum = 0

if (a > b && a > c && a > d && a > e && a > f) {
    firstNum = a
} else if (b > a && b > c && b > d && b > e && b > f) {
    firstNum = b
} else if (c > a && c > b && c > d && c > e && c > f) {
    firstNum = c
} else if (d > a && d > b && d > c && d > e && d > f) {
    firstNum = d
} else if (e > a && e > b && e > c && e > d && e > f) {
    firstNum = e
} else if (f > a && f > b && f > c && f > d && f > e) {
    firstNum = f
}

if (a > b && a < firstNum){
    secondNum = a
}else if (a > c && a < firstNum){
    secondNum = a
}

console.log(`Galutine seka: ${firstNum} ${secondNum}`)