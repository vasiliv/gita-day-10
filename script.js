let conditionMet = false;

users = [
    {
    username: "name1",
    password: "password1"
    },
    {
    username: "name2",
    password: "password2"
    },
    {
    username: "name3",
    password: "password3"
    },
    {
    username: "name4",
    password: "password4"
    }
]

document.getElementById("loginForm").addEventListener("submit",  function(e){
    e.preventDefault()

    //  წამოვიღო ინფორმაცია ინფუთ ველებიდან
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    users.forEach(user => {        
        if(username == user.username &&  password == user.password){
            console.log(username, password)
            const token = Math.random().toString(36).substr(2)            
            localStorage.setItem("token", token)
            window.location.href = "./home.html"
            conditionMet = true;
        }                 
    });  

    if (!conditionMet) {
        alert("Wrong username or password")
    }
})
   