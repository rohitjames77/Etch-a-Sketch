let divChild = document.querySelector('.displayChild');
let screen = document.querySelector('.screen');
console.log(divChild);


function divGridCreation(num){
    for (i=0; i<= num;i++){
        let gridDiv = document.createElement('div');
        screen.append(gridDiv);
        gridDiv.classList = "gridDiv";
        
}

}

divGridCreation(16);


