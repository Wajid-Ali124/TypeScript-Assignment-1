var Name = "Wajid Ali";
//LowerCase
console.log("Lowercase:", Name.toLowerCase());
// Uppercase
console.log("Uppercase:", Name.toUpperCase());
// Titlecase
console.log("Titlecase:", Name.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
