/*
por tag: getElementByTag()
por ID: getElementById()
por nome: getElementByName()
por classe: getElementsByClassName()
por seletor: querySelector() <------

case-sensitive
 */

let name = window.document.getElementById("name")
let email = document.querySelector("#e-mail")
let info = document.querySelector("#info")
let nameOk = false
let emailOk = false
let infoOk = false
let map = document.querySelector("#map")

name.style.width = "100%"
email.style.width = "100%"

function validaName(){
    let txtNome = document.querySelector("#txtName") 

    if(name.value.length < 3)
    {
        txtNome.innerHTML = "invalid name!"
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "valid name!"
        txtNome.style.color = "green"
        nameOk = true
    }
    
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){

        txtEmail.innerHTML = "invalid e-mail"
        txtEmail.style.color = "red"
    }
    else{
        txtEmail.innerHTML = "valid e-mail!"
        txtEmail.style.color = "green"
        emailOk = true
    }


}

function validaInfo(){
    let txtInfo = document.querySelector("#txtInfo")
    
    if(info.value.length >= 222){
        txtInfo.innerHTML = "TOO MUCH TEXT!"
        txtInfo.style.color = "red"
    }else{
        txtInfo.style.display = "none"
        infoOk = true
    }


}

function enviar(){

    if (nomeOk == true && emailOk == true && infoOk == true){
        alert ("Contact sent!")
    }else{
        alert ("Fill the contact section correctly")
    }
}

function mapZoom(){
    map.style.width = '800px'
    map.style.height = '600px'
}


function mapNormal(){
    map.style.width = '400px'
    map.style.height = '250px'
}