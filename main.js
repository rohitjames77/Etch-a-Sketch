// function for customizing background color as per button selection ................
let selectionButtons = document.querySelector('.Control-Panel');
selectionButtons.addEventListener('click', buttonsInput )

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
// Grid Selection Event ........................................................




// function for Div Grid Creation ...............................................

let gridInput;
let gridSelectionDiv = document.querySelector('.gridSelection');
gridSelectionDiv.addEventListener('click',createGrid())

 
let screen = document.querySelector('.screen1');
let screenHeight = screen.style.height;

// Event function ....................................................................
function createGrid (event){
    if (event.target.className == 'smallGrid'){
        gridInput = 64;
        console.log(gridInput);
    }else if (event.target.className == 'mediumGrid'){
        gridInput= 32;
    console.log(gridInput);
    }
    else if (event.target.className == 'largeGrid'){
        gridInput = 18;
        console.log(gridInput);
    }

    let numSquare = gridInput * gridInput;
    let fragment = document.createDocumentFragment();
    
    for (let i = 0; i < numSquare; i++) {
        let screenChild = document.createElement('div');
        screenChild.className = 'screenChild';
        fragment.appendChild(screenChild);

        screenChild.style.height = screen.clientHeight / gridInput + 'px';
        screenChild.style.width = screen.clientWidth / gridInput + 'px';
    }    

    screen.appendChild(fragment);
}    


// Event listener for mouseHover effect.............................................

let allChildDiv= document.querySelectorAll('.screenChild');


allChildDiv.forEach(function (allChildDiv){
    allChildDiv.addEventListener('mouseover', function (){
        allChildDiv.style.backgroundColor = defaultBackground;
    })    
    
})    


let defaultBackground;

