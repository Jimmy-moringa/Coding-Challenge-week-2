function takeInput(){

let myItem = document.getElementById ("firstin").value;
const myQuantity = document.getElementById ("secondin").value;
const myColor = document.getElementById ("thirdin").value;
const mySize= document.getElementById ("fourthin").value;
const myDateOfDelivery = document.getElementById ("fifthin").value;

document.getElementById ("firstout") .innerHTML = myItem;
document.getElementById ("secondout") .innerHTML = myQuantity;
document.getElementById ("thirdout") .innerHTML = myColor;
document.getElementById ("fourthout") .innerHTML = mySize;
document.getElementById ("fifthout") .innerHTML = myDateOfDelivery;


}


function enterPin () {
    const speed = parseInt(prompt("enter your pin"));
}
