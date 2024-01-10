

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
        allChildDiv.style.backgroundColor = defaultBackground;
    })
    
})

let selectionButtons = document.querySelector('.Control-Panel');
selectionButtons.addEventListener('click', buttonsInput )

let defaultBackground;
function buttonsInput (event) {
if (event.target.className == "black" ){
    defaultBackground = '#000000';
}else if (event.target.className == 'color-selection'){
    defaultBackground = event.target.value; 
}
else if (event.target.className == 'erase'){
    defaultBackground = '#FFFFFF';
}

}

