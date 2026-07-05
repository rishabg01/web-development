const max=prompt("Enter the maximum number:");

const random =Math.floor(Math.random()*max)+1;

let guess=prompt("Enter your guess:");

while(true){
    if(guess==="quit"){
        console.log("Thanks for playing!");
        break;
    }
    if(guess==random){  
        console.log("You guessed it right!");  
        break;
    }else if(guess<random){
       guess=prompt("Too low! Try again. Enter your guess:");
    }else if(guess>random){
        guess=prompt("Too high! Try again. Enter your guess:");
    }
    
}