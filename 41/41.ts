let magicians:string[] = ["Wajid","Majid","Sajid","Sajjad","Wajahat"];

const show_magician = (magic:string[]) =>
{
    magicians.forEach(name =>{
        console.log(name);
    })
}

show_magician(magicians);