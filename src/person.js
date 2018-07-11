console.log("person.js is running");

export const isAdult = (x) => !isNaN(Number(x)) && x >= 18 ? true : false;
export const canDrink = (x) => !isNaN(Number(x)) && x >= 19 ? true : false;

const isSenior = (x) => !isNaN(Number(x)) && x >= 65;

export default isSenior;