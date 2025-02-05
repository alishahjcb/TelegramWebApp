let tg = window.Telegram.WebApp; 

document.getElementById("start-btn").addEventListener("click", function () {
    let user = tg.initDataUnsafe?.user;

    if (user) {
        document.getElementById("user-info").innerHTML = 
            `Hello, ${user.first_name} ${user.last_name || ""} (@${user.username})`;
    } else {
        document.getElementById("user-info").innerHTML = "User data not available!";
    }
});

tg.expand(); // Expands Web App to full screen
