const input = require('sync-input');

console.log("WELCOME TO THE CARNIVAL GIFT SHOP!")
console.log("Hello friend! Thank you for visiting the carnival!")
console.log("Here's the list of gifts:\n")
gifts=[{name:"Teddy Bear", price:10, id:1},
    {name:"Big Red Ball", price:5, id:2},
    {name:"Huge Bear", price:50, id:3},
    {name:"Candy", price:8, id:4},
    {name:"Stuffed Tiger", price:15, id:5},
    {name:"Stuffed Dragon", price:30, id:6},
    {name:"Skateboard", price:100, id:7},
    {name:"Toy Car", price:25, id:8},
    {name:"Basketball", price:20, id:9},
    {name:"Scary Mask", price:75, id:10}]
for (let i=1; i<gifts.length+1; i++){
    console.log(i+"- " + gifts[i-1].name + ", Cost: "+ gifts[i-1].price +" tickets")
}
let tickets=0;

do{
    var visitor_wants=input("\nWhat do you want to do?" +
        "\n" +
        "1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
    switch (visitor_wants){
        case "1":
            if (gifts.includes(undefined,9)){
                console.log("Wow! There are no gifts to buy.")
                break}
            const gift_input = input("Enter the number of the gift you want to get:")
            if (isNaN(gift_input)){console.log("Please enter a valid number!")
                break}
            let gift_index = gifts[gift_input - 1]
            if (!gift_index){console.log("There is no gift with that number!")
                break}
            if (tickets<gift_index.price){console.log("You don't have enough tickets to buy this gift.")
                break}
            tickets -= gift_index.price
            console.log(`Here you go, one ${gift_index.name}!`)
            console.log(`Total tickets: ${tickets}`)
            delete gifts[gift_input-1];
            break
        case "2":
            const ticket_amount = parseInt(input("Enter the ticket amount:"))
            if (!isNaN(ticket_amount)&&ticket_amount<1000&&0<ticket_amount){
                tickets += ticket_amount
                console.log(`Total tickets: ${tickets}`)
                break
            }else{
                console.log("Please enter a valid number between 0 and 1000.")
                break
            }
        case "3":
            console.log(`Total tickets: ${tickets}`)
            break
        case "4":
            if (gifts.includes(undefined,9)){
                console.log("Wow! There are no gifts to buy.")
                break}
            console.log("Here's the list of gifts:\n")
            for (let i = 1; i < gifts.length + 1; i++) {
                if (gifts[i-1]!==undefined){
                    console.log(i + "- " + gifts[i - 1].name + ", Cost: " + gifts[i - 1].price + " tickets")
                }}
            break
        default:
            console.log("Please enter a valid number!")
            break
    }

} while (visitor_wants!=="5");
console.log("Have a nice day!\n")

