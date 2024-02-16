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

console.log(`${unavailabeGuest} was unable to join us`)