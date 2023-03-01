let vardas = "vardas"
let num = 10
let relationship = (vardas == num)
console.log(num + ", " + vardas)
console.log(`${num}, ${vardas}`)

let name = "Jonas"
let surname = "Mažeika"
let fullName = (name + " " + surname)
console.log(fullName)

let tekstas = "pirmas"
console.log(tekstas.length)
console.log(tekstas.toUpperCase())
console.log(tekstas.charAt(1))
console.log(tekstas.indexOf("r"))

tekstas = "Cia gali buti jusu reklama"
console.log(tekstas.replace("gali buti", "yra"))
console.log(tekstas.substring(4, 14))
console.log(tekstas.substring(14))
console.log(tekstas.substr(4, 9))

console.log("------------")
let x = 6.43
console.log(Math.round(x))
console.log(Math.ceil(x))
console.log(Math.floor(x))

let y = 5.8,
    z = 9
console.log(Math.max(x, y, z))

let i = Math.random() * 50
console.log(Math.round(i))

//nuo 16 iki 26
let a = Math.floor(Math.random() * (26 - 16 + 1) + 16)
console.log(a)

if (y == z) {
    console.log("lygus")
} else {
    console.log("nelygus")
}

let b = 1
while (b <= 10) {
    console.log(b)
    b++
}

for (let b = 1; b <= 20; b++) {
    console.log(b)
}

let s = 0
let skaiciai = [10, 20, 30, 40, 50, 60]

for (let i = 0; i < skaiciai.length; i++) {
    s += skaiciai[i]
}
console.log(s)

// alert("Aptiktas virusas!")
// confirm("Ar sutinkate?")
// prompt("Kiek tau met?")
let turimVarda = false

// while(turimVarda ==false){
//     let userVardas = prompt("Koks tavo vardas")

//     if(userVardas) {
//         if(confirm(`Ar tikrai tai tavo vardas ${userVardas}?`)){
//             alert( `Labas, ${userVardas}!`)
//             turimVarda = true
//         }else{
//             alert("Bandyk dar karta")
//         }
//     }else{
//         alert("Bandyk dar karta")
//     }
// }

function sumOfCubes(a, b) {
    console.log(a * a * a + b * b * b)
}

sumOfCubes(7, 9)

let studentai = ['Lukas', 'Rita', 'Martynas', 'Rasa']
studentai[3] = 'Laura'
console.log(studentai[3])

console.log(studentai.length)
console.log(studentai)

for (let i = 0; i < studentai.length; i++){
    console.log(studentai[i])
}

studentai.pop()
console.log(studentai)

studentai.push('Tomas')
console.log(studentai)

let darbuotojai = ['Ieva', 'Andrius', 'Ugne', 'Migle']
darbuotojai[2] = undefined
console.log(darbuotojai)
darbuotojai.push('Jurga')
console.log(darbuotojai)

let mokykla = [studentai, darbuotojai]
console.log(mokykla)

console.log(mokykla[1][2])