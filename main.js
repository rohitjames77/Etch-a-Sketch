

let screen = document.querySelector('.screen1');
let screenHeight = screen.style.height;
console.log(screenHeight);


function createGrid (num){
    let numSquare =  num*num;
    console.log(numSquare);
for (let i =0; i<= numSquare;i++){
    let screenChild = document.createElement('div');
    screenChild.className = 'screenChild';
    screen.append(screenChild);
 screenChild.style.height = screen.clientHeight/num+'px';
 screenChild.style.width = screen.clientWidth/num+'px';
    }
}

createGrid(32);

// let eventScreen = document.querySelector('.screen1');
// eventScreen.addEventListener('click',mouseOver());

// function mouseOver() {
// document.querySelector('.screenChild').style['background-color'] = 'blue';
// }




