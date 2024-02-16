var guests = ["Sir Zia", "Kamran Tessori", "Elon Musk"];
var unavailabeGuest = "Elon Musk";
var index = guests.indexOf(unavailabeGuest);
//Replacing guest with new guest
if (index !== -1) {
    guests[index] = "Nikola Tesla";
}
//Printing the Updated list.
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner. It would be an honor to have you join us."));
});
console.log("".concat(unavailabeGuest, " was unable to join us\n\n"));
//Announcing new Table
console.log("I am Happy to annouce that we have found a bigger table");
//Adding to Beginning
guests.unshift("Wajid Ali");
//Adding to Middle
guests.splice(Math.ceil(guests.length / 2), 0, "Maryum Abrar");
var append = function (item, guests) {
    guests.push(item);
};
//Adding in last using append()
append("Farooq", guests);
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner. It would be an honor to have you join us."));
});
