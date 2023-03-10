/* 
Užduotis 1
Naudodami while loop, konsolėje parašykite nuo 10 iki 1. 
*/
let i = 10
while (i >= 1) {
    console.log(i)
    i--
}


/* 
Užduotis 2
Naudodami for loop, konsolėje parašykite nuo 10 iki 1.
*/
console.log('--2')
for (let i = 10; i >= 1; i--) {
    console.log(i)
}


/*
Užduotis 3
Per mėnesį avių skaičius išauga 4 kartais. Naudodami while loop ir tris nurodytus kintamuosius, išveskite avių skaičių 12 mėnesių.

let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

Štai kaip atrodys pirmos dvi eilutės:

Po 1 mėnesio(-ių) bus 16 avių!
Po 2 mėnesio(-ių) bus 64 avių!
*/
console.log('--3')
let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

i = 0
while (i < kiekMenSpausdinti) {
    numAvys *= 4
    console.log(`Po ${numMenuo} menesio(-iu) bus ${numAvys} aviu!`)
    numMenuo++
    i++
}

/*
Užduotis 4
Atlikite užduotį JS 03 su for loop
*/
console.log('--4')
numAvys = 4;
numMenuo = 1;

for (i = 0; i < kiekMenSpausdinti; i++) {
    numAvys *= 4
    console.log(`Po ${numMenuo} menesio(-iu) bus ${numAvys} aviu!`)
    numMenuo++
}


/*
Užduotis 5
Hidroeleketrinėje yra 19 generatorių. Pirmi 4 gamina po 62 MW,
 likusieji 15 - po 124 MW. Inžinieriai paprašė tavęs sukurti du ciklus (loops), kurie vienas po kito įjungia visus 19 generatorių ir atspausdina generuojamų MW skaičių. Pirmiems 4 generatoriams panaudok while loop, likusiems 15 - for loop. Kiekviena spausdinama eilutė turėtų atrodyti taip (koreguojant currentGen ir totalMW):

Generatorius #1 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 124 MW!

Naudokis tokiais kintamaisiais:
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;
*/
console.log('--5')
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;

while (currentGen <= 4) {
    totalMW += 62
    console.log(`Generatorius #${currentGen} įjungtas, pridėjo 62 MW, viso generuojama ${totalMW} MW!`)
    currentGen++
}

for (let i = currentGen; i <= totalGen; i++) {
    totalMW += 124
    console.log(`Generatorius #${currentGen} įjungtas, pridėjo 124 MW, viso generuojama ${totalMW} MW!`)
    currentGen++
}

/*
Užduotis 6
Keli pakeitimai JS 05 užduočiai. Veikia tik lyginiai generatoriai. Panaudok tik vieną for loop. Nepamiršk, kad pirmi 4 generatoriai gamina po 62 MW, o likusieji 15 - po 124 MW.

Konsolės formatas:

Generatorius #1 išjungtas.
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!

Naudojami kintamieji:
let totalGen = 19;
let totalMW = 0;
*/
console.log('--6')
totalMW = 0
currentGen = 1

for (let i = 0; i < totalGen; i++) {
    if (i % 2 == 0) {
        if (i < 4) {
            totalMW += 62
            console.log(`Generatorius #${currentGen} įjungtas, pridėjo 62 MW, viso generuojama ${totalMW} MW!`)
        }
        if (i >= 4) {
            totalMW += 124
            console.log(`Generatorius #${currentGen} įjungtas, pridėjo 124 MW, viso generuojama ${totalMW} MW!`)
        }
    } else {
        console.log(`Generatorius #${currentGen} išjungtas.`)
    }
    currentGen++
}

/*
Užduotis 7
Papildyk while loop taip, kad tik lyginiai skaičiai būtų spausdinami. Tavo rezultatas turėtų būti lyginiai skaičiai nuo 10 iki 2 žemėjančia tvarka.

let num=10;
while (num > 0) {

console.log(num);

num--;
}
*/
console.log('--7')
let num = 10;
while (num > 0) {
    if (num % 2 == 0)
        console.log(num)

    num--;
}



/*
Užduotis 8
Sukurk funkciją maxOf2, kuri priima du skaičius ir gražina didesnį skaičių. Nepamiršk galimybės, kad skaičiai bus lygūs. Tuo atveju gražink vieną iš skaičių.
*/
function maxOf2(a, b) {
    if (a > b) {
        return a
    } else if (b > a) {
        return b
    } else {
        return a
    }
}



/*
Užduotis 9
Šiuo metu Lietuvoje yra 26 laipsniai pagal Farenheitą,
naudodamiesi JavaScript apskaičiuokite kokia temperatūra yra pagal Celsijų.

Būtinos sąlygos:
- Turime "string" kintamąjį su tekstu "Lietuvoje šiuo metu laipsnių pagal Celsijų"
- Negalima rašyti jokio papildomo teksto
- Temperatūra pagal Celsijų turi būti nurodyta vienas skaičius po kablelio
- Temperatūra turi būti konvertuojama iš Farenheito į Celsijų
- Rezultatą išvesti konsolėje

Rezultatas:
Lietuvoje šiuo metu -3.3 laipsnių pagal Celsijų
*/
console.log('--9')
let fTemp = 26
let cTemp = ((fTemp - 32) * 5 / 9).toFixed(1)
let text = "Lietuvoje šiuo metu laipsnių pagal Celsijų"

console.log((text.replace(`laipsnių pagal Celsijų`, `${cTemp}`)) + text.substring(19))

/*
Užduotis 10
Turime masyvą, kuriame yra trumpos tekstinės eilutės (pateikta apačioje). Mūsų užduotis:
1. Sukurti funkciją, kuri rastų ilgiausią žodį tekstinėje eilutėje
2. Panaudojant šią funkciją išvesti kiekvienos eilutės ilgiausią žodį (rezultatas turi būti viena tekstinė eilutė)
3. Išvedant žodžius panaudoti tarpą tarp žodžių
4. Išvedimas turi būti dinamiškas (pasikeitus masyve esančių eilučių skaičiui - vis tiek gautume kiekvienos eilutės ilgiausią žodį)
5. Rezultatą išvesti konsolėje

// Masyvas
let posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];
*/
console.log('--10')
let posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"]

function longestWord(string) {
    let splitStr = string.split(' ')
    let letterCount =0
    let word = ""

    for (var i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length > letterCount) {
            letterCount = splitStr[i].length
            word = splitStr[i]
        }
    }
    return word
}

let foundWords = ""
for (let i = 0; i < posts.length; i++) {
    foundWords =  foundWords + `${longestWord(posts[i])} `
}
console.log(foundWords)

/*
Užduotis 11
Įmonė nori įsigyti 2 baltus arba juodus tos pačios rūšies kompiuterius (būtinai vienos spalvos), kurių bendra kaina neviršytų 1600 €. Sugeneruokite sąrašą kompiuterių, kuriuos galite pasiūlyti.

Masyvas su objektais:

let pcs = [
{ "modelis":"lenovo idėja", "kaina":1234, "spalva":{"raudona":1,"žalia":2} },
{ "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
{ "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mėlyna":3,"žalia":1} },
{ "modelis":"dell apskritimas", "kaina":697, "spalva":{"juoda":1,"balta":2} },
{ "modelis":"acer peizažas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
{ "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
{ "modelis":"asus pokšt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
];

Būtinos sąlygos:
- Panaudokite bent po vieną ciklą ir sąlyginį sakinį,
- Rezultatas išvedamas konsolėje,
- Line break naudokite "\n".

Rezultatas turėtų atrodyti taip:

Galimi variantai:

Modelis: hp monstras
Kaina: 1600
Spalvos: juoda

Modelis: dell apskritimas
Kaina: 1394
Spalvos: balta

Modelis: acer peizažas
Kaina: 1240
Spalvos: balta ir juoda
*/
console.log('--11')
let pcs = [
    { "modelis":"lenovo idėja", "kaina":1234, "spalva":{"raudona":1,"žalia":2} },
    { "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
    { "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mėlyna":3,"žalia":1} },
    { "modelis":"dell apskritimas", "kaina":697, "spalva":{"juoda":1,"balta":2} },
    { "modelis":"acer peizažas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
    { "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
    { "modelis":"asus pokšt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
    ];

    console.log(pcs[0].spalva.raudona)
    for(let i=0;i<pcs.length;i++){
        if(pcs[i].kaina * 2 <= 1600 && (pcs[i].spalva.balta >=2 || pcs[i].spalva.juoda >=2)){

            if((pcs[i].spalva.balta >=2 || pcs[i].spalva.juoda >=2)){
                console.log(`Modelis: ${pcs[i].modelis}`)
                console.log(`Kaina: ${pcs[i].kaina * 2}`)
                console.log(`Spalvos ${pcs[i].spalva[0]}`)
                console.log()
            }else{

            }
        }
    }
    // console.log(pcs[0].modelis)
