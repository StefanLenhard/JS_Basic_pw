
let username=prompt("Who is there?");


if (username==="Admin"){
    
    let password = prompt ("Password") 

    if (password ==="TheMaster") {
        alert("Welcome")
    } else if (password === '' || password === null) {
        alert ("Cancelled")
    } else {
        alert ("Wrong Password")
    }
}

else if (username === '' || username === null) {
    alert("Cancelled")
} else {
    alert("I don't know you")
}



