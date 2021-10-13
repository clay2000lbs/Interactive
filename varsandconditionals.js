let jonSnowAttack = 25
let jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack) {
    console.log("Jon Snow has better attack than Jamie Lannister.")
} else if (jonSnowAttack === jamieLannisterAttack) {
    console.log("Jon Snow and Jamie Lannister have the same attack.")
} else {
    console.log("Jamie Lannister has better attack than Jon Snow.")
}

let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log("Jon Snow slain.")
} else {
    jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

jonSnowDefense += 25

jamieLannisterAttack
