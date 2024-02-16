let guests: string[] = ["Sir Zia", "Kamran Tessori", "Elon Musk"];

let unavailabeGuest: string = "Elon Musk";
let index: number = guests.indexOf(unavailabeGuest);

//Replacing guest with new guest
if(index !== -1)
{
    guests[index] = "Nikola Tesla"
}


//Printing the Updated list.
guests.forEach(guest => {
    console.log(`Dear ${guest}, I would like to invite you to dinner. It would be an honor to have you join us.`);
});

console.log(`${unavailabeGuest} was unable to join us\n\n`)


//Announcing new Table
console.log("I am Happy to annouce that we have found a bigger table");

//Adding to Beginning
guests.unshift("Wajid Ali");

//Adding to Middle
guests.splice(Math.ceil(guests.length /2), 0, "Maryum Abrar");

const append = (item:string, guests:string[]) =>{
    guests.push(item);
}

//Adding in last using append()
append("Farooq", guests);

guests.forEach(guest =>{
    console.log(`Dear ${guest}, I would like to invite you to dinner. It would be an honor to have you join us.`);
})


// New Annoucement
console.log("\n\nSorry to say that New Table couldn't arrive at time, Now we have only space for 2 people")

while (guests.length > 2)
{
    let removeguest = guests.pop();
    console.log(`Sorry Dear ${removeguest} we are unable to invite you at this time`)
}

guests.forEach(guest =>{
    console.log(`Dear ${guest} you are still invited to have dinner with us`);
})

guests.splice(0);

//Printing Empty Guests
console.log(guests);