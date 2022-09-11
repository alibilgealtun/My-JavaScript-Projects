const input = require('sync-input')

const machineSupplies={water:400,milk:540,beans:120,cups:9,money:550}
const coffeeList=[
    {coffee:"espresso", water:250, milk:0, beans:16, cost:4},
    {coffee:"latte", water:350, milk:75, beans:20, cost:7 },
    {coffee: "cappuccino", water:200, milk:100, beans:12, cost:6}
]
function logSupply(){
    console.log(`\nThe coffee machine has:
    ${machineSupplies.water} ml of water
    ${machineSupplies.milk} ml of milk
    ${machineSupplies.beans} g of beans
    ${machineSupplies.cups} disposable cups
    $${machineSupplies.money} of money`)
}

function action(act){
    if (act==="buy") { buy() }
    else if (act==="fill"){ fill() }
    else if (act==="take"){
        if (askPassword()){
        takeAmount=parseInt(input("How much money do you want to take?"))
        take(takeAmount) }
    }
    else if (act==="remaining"){ logSupply()}
    else if (act==="exit"){return;}
    else{
        console.log("Unknown command")
    }
}

function buy(){
    buyInput = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\nWrite 'back' to return to menu\n")
    if (buyInput==="back"){
        return;
    }
    else if (buyInput!=="1" || buyInput!=="2" || buyInput!=="3") {
        console.log("Unknown command, returning to menu.")
        return;}
    checkBuy(coffeeList[buyInput-1])
}
function checkBuy(boughtCoffee){
    if (boughtCoffee.water<=machineSupplies.water&& boughtCoffee.milk<=machineSupplies.milk && boughtCoffee.beans<=machineSupplies.beans && machineSupplies.cups>=1){
        console.log("I have enough resources, making you a coffee!")
        machineSupplies.water-=boughtCoffee.water
        machineSupplies.milk-=boughtCoffee.milk
        machineSupplies.beans-=boughtCoffee.beans
        machineSupplies.money+=boughtCoffee.cost
        machineSupplies.cups-=1}
    else{
        notEnough=checkNotEnough(coffeeList[buy-1])
        console.log(`Sorry, not enough ${notEnough}!`)
    }
}

function checkNotEnough(coffee){
    notEnoughList=[]
    if (machineSupplies.water<coffee.water){notEnoughList.push(" water")}
    if (machineSupplies.milk<coffee.milk){notEnoughList.push(" milk")}
    if (machineSupplies.beans<coffee.beans){notEnoughList.push(" beans")}
    if (machineSupplies.cups<1){notEnoughList.push(" cups")}
    return notEnoughList;}


function fill(){
    console.log("Please enter only numbers.")
    machineSupplies.water+=parseInt("Write how many ml of water you want to add: \n")
    machineSupplies.milk+=parseInt("Write how many ml of milk you want to add: \n")
    machineSupplies.beans+=parseInt("Write how many grams of coffee beans you want to add: \n")
    machineSupplies.cups+=parseInt(input("Write how many disposable cups you want to add: \n"))}

function askPassword(){
    password=input("What is the password of the machine?")
    if (password==="ILoveCoffee"){
        console.log("Password is correct. Login successful.")
        return true;
    }
    else{
        console.log("Wrong password, returning to menu.")
        return false;
    }
}

function take(amount) {
    if (amount <= machineSupplies.money) {
        console.log(`$${amount} is given, $${machineSupplies.money - amount} is left in the machine.`)
        machineSupplies.money -= amount
    } else {
        console.log(`The machine only has $${machineSupplies.money}.`)
    }
}

do{
    actionInput=input("\nWrite action (buy, fill, take, remaining, exit): \n").toLowerCase()
    action(actionInput)
} while(actionInput!=="exit");
