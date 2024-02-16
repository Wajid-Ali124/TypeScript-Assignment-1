let usernames:string[] = ["Maryum Abrar","Wajid Ali","admin","Farooq","Kazim"];

usernames.forEach(name =>{
    if(name === "admin")
    {
        console.log("Hello admin, would you like to see a status report?");
    }
    else{
        console.log(`Hello ${name}, thank you for logging in again.`)
    }
})
