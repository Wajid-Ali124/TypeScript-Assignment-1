var defaultcity = "Karachi";
var defaultCountry = "Pakistan";
var describe_city = function (city, country) {
    if (city === "" || country === "") {
        console.log("".concat(defaultcity, " is in ").concat(defaultCountry));
    }
    else {
        console.log("".concat(city, " is in ").concat(country));
    }
};
describe_city("Paris", "France");
describe_city("Washington", "United States");
describe_city("London", "");
