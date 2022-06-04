function changeUserName()
{
    document.getElementById('userName').innerText = "Jennifer Doe";
    
    //var uname = document.querySelector("userName");

}
function rejectUser(element){

    //Working
    //element.closest("li").remove();
    
    //Working
    document.getElementById("userOne").remove();
    
    //Working
    //const element1 = document.getElementById('userOne');
    //element1.remove();

    var count = document.querySelector(".badge1");
    count = parseInt(count.innerText)-1;
    document.querySelector(".badge1").innerText = count;
}
function acceptUser(element){
   /* var user = document.getElementsByClassName("myConnection");
    alert(user);
    user.appendChild(element);
   */ 
    
    const userprofile = document.querySelector('.myConnection');
    userprofile.appendChild(element.closest("li"));

    var a = document.getElementById("userOne").children[1];
    a.remove();

    var count = document.querySelector(".badge");
    count = parseInt(count.innerText)+1;
    document.querySelector(".badge").innerText = count;

    var count = document.querySelector(".badge1");
    count = parseInt(count.innerText)-1;
    document.querySelector(".badge1").innerText = count;
}
console.log("page loaded...");
 
//  Delay Timer starts
function message() {
    console.log("Delayed message");    
}
console.log("Start");
setTimeout(message, 3000);
console.log("End");
//  Delay Timer ends


var nameTag = document.querySelector("#name-tag");
	function setName(element) {
    console.log(element.value);
    nameTag.innerText = element.value;
}
var z = document.querySelector("h1 span");
console.log(z);