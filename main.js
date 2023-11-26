let divChild = document.querySelector('.displayChild');
let screen = document.querySelector('.screen');

let Element= document.querySelector('.screen');
let width= Element.offsetWidth;
let height= Element.offsetHeight;


function divGridCreation(num){
        for (i=0; i<= num;i++){
        let screenDiv = document.createElement('div');
        screen.append(screenDiv);
        
        }

}

divGridCreation(1);




