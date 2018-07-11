console.log("destructuring");

// OBJECT DESTRUCTURING
const person = {
    name: "Ryan",
    age: 38,
    location: {
        city: "Ottawa",
        temp: 25
    }
};

const { name: firstName = "Anonymous", age = 0 } = person;
console.log(`${firstName} is ${age}.`)

const { city, temp: temperature } = person.location;
if (person.location.city && person.location.city) {
    console.log(`It's ${temperature} in ${city}`);
}


// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);


// ARRAY DESTRUCTURING

const address = ["123 Whatever Street", "Ottawa", "Ontario", "K1J 0B1"];

console.log(`You are in ${address[1]} ${address[2]}.`);

const [street, addyCity, province, postalCode] = address;

console.log(`You are in ${addyCity} ${province}.`);


//incomplete destructuring
const address2 = ["123 Whatever Street", "Ottawa"];
const [, iCity, iProvince = "Ontario"] = address2;
console.log(`You are in ${iCity} ${iProvince}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [beverage, , priceMed] = item;
console.log(`A medium ${beverage} costs ${priceMed}`);