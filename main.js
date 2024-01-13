let screen = document.querySelector('.screen1');
let defaultBackground;
document.addEventListener('DOMContentLoaded', function () {
    let gridInput;

    let gridSelectionDiv = document.querySelector('.gridSelection');
    gridSelectionDiv.addEventListener('click', demo);

    function demo(event) {
        if (event.target.className == 'smallGrid') {
            gridInput = 64;
        } else if (event.target.className == 'mediumGrid') {
            gridInput = 32;
        } else if (event.target.className == 'largeGrid') {
            gridInput = 18;
        }


        clearGrid();
        createGrid(gridInput);
    }

    function clearGrid() {
        while (screen.firstChild) {
            screen.removeChild(screen.firstChild);
        }
    }

    function createGrid(gridInput) {
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


});

    screen.addEventListener('mouseover', function (event) {
        if (event.target.classList.contains('screenChild')) {
            event.target.style.backgroundColor = defaultBackground;
        }
    });


    let selectionButtons = document.querySelector('.Control-Panel');
selectionButtons.addEventListener('click', buttonsInput )
function buttonsInput (event) {
if (event.target.className == "black" ){
    defaultBackground = '#000000';
    console.log(defaultBackground);
}else if (event.target.className == 'color-selection'){
    defaultBackground = event.target.value;
    console.log(defaultBackground); 
}
else if (event.target.className == 'erase'){
    defaultBackground = '#FFFFFF';
    console.log(defaultBackground);

}

};
