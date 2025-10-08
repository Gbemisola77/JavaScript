function validate(e){
    e.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const age = document.getElementById("age").value
    const message1 = document.getElementById("message")

    let message =''
    if (email ==""){
        message = "Please enter a valid email"
        message1.style.color='red'
    }
    else if (password ==""){
        message = "Password must be atleast 8 characters"
        message1.style.color='red'
    }
    else if (age ==""){
        message = "Age must be between 12 to 50"
        message1.style.color='red'
    }
    else{
        message = "Login Successful!"
        message1.style.color='green'
    }

    message1.innerText = message
}