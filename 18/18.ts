let places: string[] = ["Itlay","Turkey","Denmark","Spain","America"];

//Original Array
console.log(places);

//Alphabetical Order
console.log([...places].sort());

//Showing Orginal Array is not Changed
console.log(places);

//Reverse Alphabetical Order
console.log([...places].sort().reverse());

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