function checkvalues(){
    console.log("entered");
    let emailele=document.getElementById("email").value;
    let usernameele=document.getElementById("username").value;
    let createpele=document.getElementById("createp").value;
    let confirmpele=document.getElementById("confirmp").value;
    let mobileele=document.getElementById("phone").value;
    let successfulr=document.getElementById("complete");
    if(!emailele.includes("@gmail.com")){
        console.log("entered");
        alert("enter valid Email Id");
    }
    if(usernameele.length==0){
        alert("Username cannot be empty");
    }
    if(createpele.length<=6){
        alert("the password length should be more than 6 characters");
    }
    if(createpele!==confirmpele){
        alert("The created Password does not match Confirm password");
    }
    if(mobileele.length!==10){
        alert("Enter Valid Phone number");
    }
    else{
        successfulr.textContent="Registered Successfully"
    }
}
function createtask(){
    let taskele=document.getElementById("enteredtask").value;
    let paraele=document.createElement("p");
    paraele.id="paraid"
    paraele.textContent=taskele;
    let taskbodyele=document.getElementById("taskbody");
    taskbodyele.appendChild(paraele);
    paraele.classList.add("task-para");
    let button=document.createElement("button");
    button.textContent="delete"
    button.classList.add("button3");
    let button1=document.createElement("button");
    button1.textContent="Update"
    button1.classList.add("button3");
    taskbodyele.appendChild(button1);
    taskbodyele.appendChild(button);
    button1.id="updatebtn";
    button.addEventListener=("onclick",function(){
        taskbodyele.removeChild(paraele);
        taskbodyele.removeChild(button);
    })
}
let updatele=document.getElementById("updatebtn");
updatele.onclick=function(){
let paraele=document.getElementById("paraid");
let inputele=document.createElement("input")
let tasksbody=document.getElementById("taskbody")
tasksbody.appendChild(inputele);
}