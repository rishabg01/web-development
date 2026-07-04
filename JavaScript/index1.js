let todo=[];

let req=prompt("Enter your request:");


while(true){
    if(req=="quit"){
        console.log("Thanks for using the app");
        break;
    }
    if(req=="list"){
        console.log("Your todos are:");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
    
    }else if(req=="add"){
        let task=prompt("Enter your task");
        todo.push(task);
        console.log("task added");
    }else if(req=="delete"){
        let index=prompt("Enter the index of the task to delete");
        todo.splice(index,1);
        console.log("task deleted");
    }else{
        console.log("Invalid request");
    }

 req=prompt("Enter your request:");

}