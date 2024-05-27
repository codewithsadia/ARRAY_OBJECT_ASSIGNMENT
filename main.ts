type friends={
    firstname:string,
    lastname:string,
    id:number
}
let friendNames = {
    firstname: "Hania",
    lastname: "Imran",
    id:65
}

let secondName = {
    firstname: "Umaima",
    lastname:"Imran",
    id: 75
}

let thirdName = {
    firstname: "Saad",
    lastname: "Malik",
    id: 85
}
let sum = Object.values(friendNames);;
console.log(sum);


let add =  {friendNames, secondName, thirdName};
console.log(add);