

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

let allChildDiv= document.querySelectorAll('.screenChild');


allChildDiv.forEach(function (allChildDiv){
    allChildDiv.addEventListener('mouseover', function (){
        allChildDiv.style.backgroundColor = "#0000ff";
    })
    
})

let selectionButtons = document.querySelector('.Control-Panel');
selectionButtons.addEventListener('click', buttonsInput )


function buttonsInput (event) {
if (event.target.className == "black" ){
    console.log('black');
}
else if ( event.target.className == 'rainbow'){
    console.log('rainbow');
}
}
