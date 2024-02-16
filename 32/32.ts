let current_users:string[] = ["Maryum Abrar","Wajid Ali","admin","Farooq","Kazim"];

let new_users: string[] = ["Ibrahim","Wajid Ali","admin","Majid","Sajid"];

for (let new_username of new_users) {
    if (current_users.some(username => username.toLowerCase() === new_username.toLowerCase())) {
        console.log(`the person will need to enter a new username`);
    } else {
        console.log(`The username '${new_username}' is available.`);
    }
}