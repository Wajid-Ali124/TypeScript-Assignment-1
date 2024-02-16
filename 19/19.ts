let guests: string[] = ["Sir Zia", "Kamran Tessori", "Elon Musk"];

let unavailabeGuest: string = "Elon Musk";
let index: number = guests.indexOf(unavailabeGuest);

//Replacing guest with new guest
if(index !== -1)
{
    guests[index] = "Nikola Tesla"
}

//Adding to Beginning
guests.unshift("Wajid Ali");

//Adding to Middle
guests.splice(Math.ceil(guests.length /2), 0, "Maryum Abrar");

const append = (item:string, guests:string[]) =>{
    guests.push(item);
}
//Adding in last using append()
append("Farooq", guests);

while (guests.length > 2)
{
    guests.pop();
}

//Printing Number of Guests invited
console.log(`Number of Guest Invited: ${guests.length}`)
guests.forEach(guest =>{
    console.log(`Dear ${guest} you are still invited to have dinner with us`);
})

