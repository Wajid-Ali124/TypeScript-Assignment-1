var current_users = ["Maryum Abrar", "Wajid Ali", "admin", "Farooq", "Kazim"];
var new_users = ["Ibrahim", "Wajid Ali", "admin", "Majid", "Sajid"];
var _loop_1 = function (new_username) {
    if (current_users.some(function (username) { return username.toLowerCase() === new_username.toLowerCase(); })) {
        console.log("the person will need to enter a new username");
    }
    else {
        console.log("The username '".concat(new_username, "' is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    _loop_1(new_username);
}
