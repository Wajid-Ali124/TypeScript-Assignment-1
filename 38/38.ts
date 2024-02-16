let defaultcity: string = "Karachi";
let defaultCountry:string = "Pakistan";

const describe_city = (city:string, country:string) =>
{
    if(city === "" || country === "")
    {
        console.log(`${defaultcity} is in ${defaultCountry}`);
    }
    else{
    console.log(`${city} is in ${country}`);
}  
}

describe_city("Paris","France");
describe_city("Washington","United States");
describe_city("London","");
