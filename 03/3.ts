let Name: string = "Wajid Ali";

//LowerCase
console.log("Lowercase:", Name.toLowerCase());

// Uppercase
console.log("Uppercase:", Name.toUpperCase());

// Titlecase
console.log(
  "Titlecase:",
  Name.replace(/\b\w/g, (char) => char.toUpperCase())
);
