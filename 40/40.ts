const make_album = (artist: string, title: string, tracks?: number):
    { artist: string, title: string, tracks?: number } => {
    const album: { artist: string, title: string, tracks?: number } = { artist, title }; 
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
};


const album1 = make_album("Wajid", "Album1");
const album2 = make_album("Majid", "Album2");
const album3 = make_album("Sajid", "Album3", 12); 


console.log(album1);
console.log(album2);
console.log(album3);
