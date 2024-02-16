var guests = ["Sir Zia", "Kamran Tessori", "Elon Musk"];
var unavailabeGuest = "Elon Musk";
var index = guests.indexOf(unavailabeGuest);
//Replacing guest with new guest
if (index !== -1) {
    guests[index] = "Nikola Tesla";
}
//Adding to Beginning
guests.unshift("Wajid Ali");
//Adding to Middle
guests.splice(Math.ceil(guests.length / 2), 0, "Maryum Abrar");
var append = function (item, guests) {
    guests.push(item);
};
//Adding in last using append()
append("Farooq", guests);
while (guests.length > 2) {
    guests.pop();
}
console.log("Number of Guest Invited: ".concat(guests.length));
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, " you are still invited to have dinner with us"));
});
