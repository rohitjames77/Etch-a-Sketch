







let screen = document.querySelector('.screen1');
let screenHeight = screen.style.height;
console.log(screenHeight);
let gridSelectionDiv = document.querySelector('.gridSelection');
gridSelectionDiv.addEventListener('click',demo);
function demo (event){
    let gridInput;
    if (event.target.className == 'smallGrid'){
                gridInput = 64;
                
            }else if (event.target.className == 'mediumGrid'){
                    gridInput= 32;
           
                }
                else if (event.target.className == 'largeGrid'){
                        gridInput = 18;
                       
                    }
                   
                    createGrid (gridInput);
    return gridInput;                
        
    
    }


 function createGrid (gridInput){
                    let screen = document.querySelector('.screen1');            
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
    


let allChildDiv= document.querySelectorAll('.screenChild');

allChildDiv.forEach(function (allChildDiv){
    allChildDiv.addEventListener('mouseover', function (){
        allChildDiv.style.backgroundColor = defaultBackground;
    })
    
})
let selectionButtons = document.querySelector('.Control-Panel');
let defaultBackground;
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

// // function for customizing background color as per button selection ................

// let defaultBackground;
// let selectionButtons = document.querySelector('.Control-Panel');
// selectionButtons.addEventListener('click', buttonsInput )

// function buttonsInput (event) {
//     if (event.target.className == "black" ){
//         defaultBackground = '#000000';
//         console.log(defaultBackground);
//     }else if (event.target.className == 'color-selection'){
//         defaultBackground = event.target.value; 
//         console.log(defaultBackground);
//     }
//     else if (event.target.className == 'erase'){
//         defaultBackground = '#FFFFFF';
//         console.log(defaultBackground);
//     }
// }
// // Event listener for mouseHover effect.............................................

// let allChildDiv= document.querySelectorAll('.screenChild');
// allChildDiv.forEach(function (allChildDiv){
//     allChildDiv.addEventListener('mouseover', function (){
//      allChildDiv.style.backgroundColor = defaultBackground;
//     })    
    
// })    
// // function for Div Grid Creation ...............................................

// 
// let gridSelectionDiv = document.querySelector('.gridSelection');
// console.log(gridSelectionDiv);
// 
// function demo (event){
// if (event.target.className == 'smallGrid'){
//             gridInput = 64;
//             console.log(gridInput);
//         }else if (event.target.className == 'mediumGrid'){
//                 gridInput= 32;
//             console.log(gridInput);
//             }
//             else if (event.target.className == 'largeGrid'){
//                     gridInput = 18;
//                     console.log(gridInput);
//                 }
//                 
    

// }

 

// // gridSelection Event function ....................................................................
// // function createGrid (gridInput){
// //                 let screen = document.querySelector('.screen1');            
// //     let numSquare = gridInput * gridInput;
// //     let fragment = document.createDocumentFragment();
    
// //     for (let i = 0; i < numSquare; i++) {
// //         let screenChild = document.createElement('div');
// //         screenChild.className = 'screenChild';
// //         fragment.appendChild(screenChild);

// //         screenChild.style.height = screen.clientHeight / gridInput + 'px';
// //         screenChild.style.width = screen.clientWidth / gridInput + 'px';
// //     }    

// //     screen.appendChild(fragment);
// // } 
// // createGrid(64) ;  





