

let screen = document.querySelector('.screen1');

function createGrid (num){
    let numSquare =  num*num;
    console.log(numSquare);
for (let i =0; i<= numSquare;i++){
    let screenChild = document.createElement('div');
    screen.append(screenChild);
 screenChild.className= 'screenChild'; 
let screenChildHeight=screen.clientHeight/numSquare;
let screenChildWidth = screen.clientWidth/numSquare;
screenChild.style.height = screenChildHeight +'px';
screenChild.style.width = screenChildWidth +'px'; 


}


}

createGrid(16);

