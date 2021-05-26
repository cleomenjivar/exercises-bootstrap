/*I - cinema tariffs
In a cinema the full tariff is 10 €, the reduced one is 8 €. Write an algorithm which given a boolean indicating if the person can have a reduced tariff prints the price to pay.*/

let Marina = true
let Diana = false

const tariff = (person) => {
    if(person === true){
console.log("Welcome to the Premium 8 €")
    }else{
    console.log("Regular Tariff 10 €")
    }

}

tariff(Marina)
tariff(Diana)


/*II - maximum
Write an algorithm which given 3 numbers finds the maximum.

III - identical dice
Write an algorithm which throws 3 dices and finds out the number of identical value, three, two or none.

IV - day’s number
Write an algorithm which given the number of a day returns its name.

V - print shop
A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 and 0.10 € from there. Write an algorithm which given a number of copies and calculates the price.*/