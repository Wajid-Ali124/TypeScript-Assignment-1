var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Itlay", "Turkey", "Denmark", "Spain", "America"];
//Original Array
console.log(places);
//Alphabetical Order
console.log(__spreadArray([], places, true).sort());
//Showing Orginal Array is not Changed
console.log(places);
//Reverse Alphabetical Order
console.log(__spreadArray([], places, true).sort().reverse());
//Showing Orginal Array is not Changed
console.log(places);
//Reversing Original 
places.reverse();
console.log(places);
//Reversing again to get Orginal array
places.reverse();
console.log(places);
//Sorting in Alphabetical
places.sort();
console.log(places);
//Sorting in Reverse
places.reverse();
console.log(places);
