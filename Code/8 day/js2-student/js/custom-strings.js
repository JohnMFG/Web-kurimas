/* 01.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
*/
let fName = 'Jonas'
let lName = 'Jonaitis'

if (fName.length < lName.length) console.log(fName)
else console.log(lName)

/* 02.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms. (LEONARDO dicaprio)
*/
console.log('--2')
console.log(fName.toUpperCase() + " " + lName.toLowerCase())

/* 03.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/
console.log('--3')
let le = ''
le = fName.charAt() + lName.charAt()

console.log(le)

/* 04.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/
console.log('--4')
le = fName.substring(fName.length - 3) + lName.substring(lName.length - 3)

console.log(le)


/* 05.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
*/
console.log('--5')
let american = 'An American in Paris'

//Paimamos visos ivairaus formato a raides
let result = american.replace(/a/gi, "*");
console.log(result)

/* 06.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
*/
console.log('--6')
american = 'An American in Paris'
let breakfast = "Breakfast at Tiffany's"
let space = '2001: A Space Odyssey'
let wonderful = "It's a Wonderful Life"

function deleteLetters(str) {
    return str.replace(/[aeiou]/gi, "")
}

console.log(deleteLetters(american))
console.log(deleteLetters(breakfast))
console.log(deleteLetters(space))
console.log(deleteLetters(wonderful))


/* 07.
Stringe, kurį generuoja toks kodas: "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"; Surasti ir atspausdinti epizodo numerį.
*/
console.log('--7')
let string = "Star Wars: Episode " + " ".repeat(Math.ceil(Math.random() * 10)) + (Math.ceil(Math.random() * 7) + 1) + " - A New Hope"

console.log(string)
console.log(string.replace(/[^0-9]/gi, ""))


/* 08.
Suskaičiuoti kiek stringe “Don't Be a Menace to South Central While Drinking Your Juice in the Hood” yra žodžių trumpesnių arba lygių nei 5 raidės. Pakartokite kodą su stringu “Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”.
*/
console.log("--8")
let string1 = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood"
let string2 = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale"
let count = 0

function counter(str) {
    let splitStr = str.split(' ')

    count = 0
    for (var i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length <= 5) {
            count++
        }
    }
    return count
}

console.log(counter(string1))
console.log(counter(string2))


/* 09.
Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
*/
console.log("--9")
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
console.log(randomCharacter)

/* 10. 
Parašykite kodą, kuris generuotų atsitiktinį stringą su 10 atsitiktine tvarka išdėliotų žodžių, o žodžius generavimui imtų iš 8-me uždavinyje pateiktų dviejų stringų. Žodžiai neturi kartotis. (reikės masyvo)
*/
console.log("--10")
string1 = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood"
string2 = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale"
let connectedWords = string1 + " " + string2

let arr =[]

let splitStr = connectedWords.split(' ')

for (var i = 0; i < 10; i++) {
    let newWord = ''
    newWord += splitStr[Math.floor(Math.random() * splitStr.length)] + ' '
    if(!arr.includes(newWord)){
        arr.push(newWord)
        console.log(newWord) 
    }else{
         i--        
    }
}
// console.log(arr)