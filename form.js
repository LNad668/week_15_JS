
function check()
{
    let email = document.getElementById("inputEmail");
    let password = document.getElementById("inputPassword");
    let address = document.getElementById("inputAddress");
    let city = document.getElementById("inputCity");
    let state = document.getElementById("inputState");

    if (email.value == ''){
        document.getElementById('errorMessage') .innerHTML += "Ваш электронный адрес не заполнен <br> "  
    }

    if (password.value == ''){
        document.getElementById('errorMessage') .innerHTML += "Ваш пароль не заполнен <br>"  
    }

    if (address.value == ''){
        document.getElementById('errorMessage') .innerHTML += "Ваш адрес не заполнен <br>"  
    }

    if (city.value == ''){
        document.getElementById('errorMessage') .innerHTML += "Ваш город не заполнен <br>"  
    }

    if (state.value == ''){
        document.getElementById('errorMessage') .innerHTML += "Ваш статус не заполнен <br>"  
    }
}
