//importing input for node
const input = require('sync-input');

console.log("Welcome to Currency Converter!")
let currencyList={
    USD:1,
    JPY:113.5,
    EUR:0.89,
    RUB:74.36,
    GBP:0.75
}
for (const currency in currencyList){
    console.log(`1 USD equals ${currencyList[currency]} ${currency}`)
}
const chooseProcess = () => {
    userWants = input("What do you want to do?\n" + "1-Convert currencies 2-Exit program\n")
    if (!(userWants === "1" || userWants === "2")) {
        console.log("Unknown input")
        chooseProcess()
    }else{
        return userWants
    }
}
const askFromCurrency= () => {
    fromCurrency = input("What do you want to convert?\nFrom: ").toUpperCase()
    while (!(fromCurrency in currencyList)){
        console.log("Unknown currency")
        askFromCurrency()
    }
}
const askToCurrency = () => {
    toCurrency=input("To: ").toUpperCase()
    while(!(toCurrency in currencyList)){
        console.log("Unknown currency")
        askToCurrency()
    }
}
const askAmount = ()=>{
    amount = input("Amount: ")
    if (amount<1){console.log("The amount cannot be less than 1") }
    else if(isNaN(amount)){console.log("The amount has to be a number")}
}
const showResult = () => {
    console.log(`Result: ${amount} ${fromCurrency} equals ${(currencyList[toCurrency] * amount / currencyList[fromCurrency]).toFixed(4)} ${toCurrency} `)
}

while(chooseProcess()!=="2"){
    askFromCurrency()
    askToCurrency()
    askAmount()
    showResult()
}

console.log("Have a nice day!")

