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
console.log("".concat(unavailabeGuest, " was unable to join us"));
