let num = 5;
let degree = 5;

function pow(num, degree){
    return (degree == 0) ? 1 :  num * pow(num, degree - 1);
}

document.write(`Pow: ${num}^${degree} = ${pow(num , degree)} </br>`);

const array = [1, 2, 3, 4, 5, 6, 7];
const num_rm = 5;

function removeElement(array, num_rm) {
    let index_rm = array.indexOf(num_rm);
    return array = (index_rm != -1) ? array.splice(index_rm, 1) : "Даного елемента не існує";
}

removeElement(array, num_rm)
document.write(`Array without "${num_rm}": ${array.join(" ")} </br>`);

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let arrLetter = characters.split("");
    let arrKey = new Array(length);
    for (let i = 0; i < arrKey.length; i++) {
        arrKey[i] = arrLetter[Math.round(Math.random() * arrLetter.length)];
    }
    return arrKey.join('');
}

const key = generateKey(16, characters);
document.write(`Key: ${key}`);







