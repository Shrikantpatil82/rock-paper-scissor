let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg")

const userscorepara = document.querySelector("")

const gencompchoice = ()=>{
let options = ["rock","paper","scissor"];
const randidx = Math.floor(Math.random()*3);
return options[randidx];

}
const drawgame =()=>{
console.log("Game was draw");
msg.innerText= "Game was draw. Play again";
msg.style.backgroundColor="gray";
}

const showwinner = (userwin,userchoice,compchoice)=>{
if(userwin){
userscore++;
console.log("You win");
msg.innerText=` You Win !  Your ${userchoice} beats ${compchoice}`;
msg.style.backgroundColor="green";

}else{
console.log("You loss");
msg.innerText =` You Loss !  Your ${compchoice} beats ${userchoice}`
msg.style.backgroundColor="red";
}
}

const playgame =(userchoice)=>{
console.log("user choice = ",userchoice);
const compchoice = gencompchoice();
console.log("comp choice = ",compchoice);
if(userchoice===compchoice){
    drawgame();
}else{
let userwin = true;
if(userchoice==="rock"){
userwin = compchoice==="paper"? false:true;
}else if (userchoice==="paper"){
userwin =compchoice==="scissors"?false:true;

}else{
compchoice==="rock"?false:true;
}
showwinner(userwin,userchoice,compchoice);
}
};


choices.forEach((choice)=>{
console.log(choice);
choice.addEventListener("click", ()=>{
const userchoice = choice.getAttribute("id");

console.log("choice was click",userchoice);
playgame(userchoice);
})

})