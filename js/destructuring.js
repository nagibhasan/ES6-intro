const fish = {
    name: 'king hilsha',
    address:'Chandpur',
    color:'silver',
    phone: '017000000',
    price: 4000,
}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const {phone} = fish;

const {age, name} = {name: 'almas', age: 56, profession: 'makeup artist'}
console.log(age);

const {address} = fish;
console.log(address);

//array destructuring
const [first, another] = [44, 99, 88, 456];
console.log(first, another);

const nayoks = ['sakib', 'bappi,', 'raj'];
const [king, lost, notun ] = nayoks;
console.log(notun);

function getName(){
    return ['Alim', 'Halim'];
}

const [baba, chacha] = getName();
console.log(chacha, baba);