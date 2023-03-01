/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/
for (let i = 0; i < 10; i++) {
    console.log("Labas")
}
/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
console.log("--2")
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
/* 03.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/
let augalai = ['aug1', 'aug2', 'aug3', 'aug4', 'augalas5', 'augalas6',
    'augalas7', 'augalas8', 'augalas9', 'augalas10'
]
/* 04.
Atspausdinkite kiekvieną 3-čio uždavinio augalą atskiroje eilutėje.
*/
console.log("--4")
for (let i = 0; i < augalai.length; i++) {
    console.log(augalai[i])
}
/* 05.
Atspausdinkite 3-čio uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/
console.log("--5")
for (let i = augalai.length - 1; i >= 0; i--) {
    console.log(augalai[i])
}
/* 06.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
console.log("--6")
for (let i = 10; i <= 50; i++) {
    if (i % 2 == 0)
        console.log(i)
}

/* 07.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
console.log("--7")
for (let i = 10; i <= 50; i++) {
    if (i % 2 == 0) {
        if (i % 10 == 0) continue
        console.log(i)
    }
}

/* 08.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/
console.log("--8")
let count = 0
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        count++
    }
}
console.log(count)
/* 09.
Suskaičiuokite kiek 3-čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/
console.log("--9")
let sort = 0
let long = 0
for (let i = 0; i < augalai.length; i++) {
    if (augalai[i].length < 5) sort++
    if (augalai[i].length > 7) long++
}
console.log(`Trumpu zodziu: ${sort}`)
console.log(`Ilgu zodziu: ${long}`)
/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/
console.log("--001")
let arr = []
let numbers = ""
let over150 = 0
for (let i = 0; i < 300; i++) {
    arr[i] = Math.floor(Math.random() * (300 - 0 + 1) + 0)

    if (arr[i] > 150) {
        over150++
    }
    if (arr[i] > 275) {
        numbers = numbers + `[${arr[i]}] `
    } else {
        numbers = numbers + `${arr[i]} `
    }

}
console.log(`Skaiciiu kiekis, kurie didesni nei 150: ${over150}`)
console.log(numbers)

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/
console.log("--002")
numbers = ""
for (let i = 1; i <= 3000; i++) {
    if (i % 77 == 0){
        numbers = numbers + `${i}, `
    }
}
console.log(numbers.substring(0, numbers.length-2))
/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/
console.log("--003")
let tekstas = ''
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        tekstas += '*'
    }
    tekstas += '\n'
}
console.log(tekstas)