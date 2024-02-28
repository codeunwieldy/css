import{tileObjects,shiftLeft,shiftRight,shiftDown,shiftUp,randomAfterShift,gameState,randomStart,addTiles,transpose,reverse,shiftTogether}from'/project-Repository/gameLogic.js';
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();//keeps arrow from moving scrollbar
    }
}, false);
const jpgDictionary = {
    2: 'pieces/2.jpg',
    4: 'pieces/4.jpg',
    8: 'pieces/8.jpg',
    16: 'pieces/16.jpg',
    32: 'pieces/32.jpg',
    64: 'pieces/64.jpg',
    128: 'pieces/128.jpg',
    256: 'pieces/256.jpg',
    512: 'pieces/512.jpg',
    1024: 'pieces/1024.jpg',
    2048: 'pieces/2048.jpg'
  };
  // Function to update the tiles based on tileObjects and jpgDictionary
  
  function updateTiles(tileObjects) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const tileValue = tileObjects[i][j].value;
            const tileElement = document.querySelector(`.tile.position-${i + 1}-${j + 1}`);
            const innerTileElement = tileElement.querySelector('.inner-Tile');

            console.log(`Updating tile-position-${i + 1}-${j + 1} with value ${tileValue}`);
              
            // Check if the tileValue is in the jpgDictionary
            if (jpgDictionary.hasOwnProperty(tileValue)) {
                // Set the background image based on the tileValue
                innerTileElement.style.width = '112.46px';
                innerTileElement.style.height = '115.32px';
                innerTileElement.style.backgroundImage = `url(${jpgDictionary[tileValue]})`;
                
            } else {
                // Handle the case when tileValue is not in the jpgDictionary
                innerTileElement.style.backgroundImage = '';
            }
        }
    }
}

  // Call the function to initially update the tiles
  

//keeps the scrollbar being used by arrow keys


/*links tile positions to the coresponding tile in the array,
     when the array is modified the shifts the objects do not move
     arround, the value in each object changes.
   */


/*so pretty much i want to set the object in the list equal to the tile 
position element. how i have the code set up is when a shift is made in
 the game 2048 the objects in the array stay where they are but the values
  of each object changes to reflect where the blocks will have moved. i have
   a list of jpg pictures that contain the image for each block that i am going 
   to put into a dictionary with the key to each being the number corresponding 
   to the block number on the picture. i want to have the inner-Tile that is 
   within each of the corresponding tile position html element to access 
   the dictionary and set itself to the picture its number matches with.*/

/*document.getElementById("tile-position-1-1")=tileObjects[0][0];
document.getElementById("tile-position-1-2")=tileObjects[0][1];
document.getElementById("tile-position-1-3")=tileObjects[0][2];
document.getElementById("tile-position-1-4")=tileObjects[0][3];
document.getElementById("tile-position-2-1")=tileObjects[1][0];
document.getElementById("tile-position-2-2")=tileObjects[1][1];
document.getElementById("tile-position-2-3")=tileObjects[1][2];
document.getElementById("tile-position-2-4")=tileObjects[1][3];
document.getElementById("tile-position-3-1")=tileObjects[2][0];
document.getElementById("tile-position-3-2")=tileObjects[2][1];
document.getElementById("tile-position-3-3")=tileObjects[2][2];
document.getElementById("tile-position-3-4")=tileObjects[2][3];
document.getElementById("tile-position-4-1")=tileObjects[3][0];
document.getElementById("tile-position-4-2")=tileObjects[3][1];
document.getElementById("tile-position-4-3")=tileObjects[3][2];
document.getElementById("tile-position-4-4")=tileObjects[3][3];*/





document.getElementById("button").addEventListener("click", function() {
    console.log("click")
   let score =  document.getElementById('scorenumber');
   score.textContent = 0;
    randomStart(tileObjects);
    updateTiles(tileObjects);
    console.log(tileObjects);

});
const matChanged=(clonedArray,tileObjects)=>{ //make copy of mat before and compare it to after
    let count = 0;
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
           if(clonedArray[i][j].value==tileObjects[i][j].value){
              count++;
           }
        }
    }
    if(count==16){
      
        console.log('false');
        return false;
      
    }
    console.log('true');
    return true;
     

}



document.addEventListener('keydown', (event) => {
    //creates copy of array to be used as comparison of array before and after a shift
    const clonedArray = tileObjects.map(row => row.map(obj => ({ ...obj }))); 
    switch (event.key) {
        case 'ArrowLeft':
            
            shiftLeft(tileObjects);
            if(matChanged(clonedArray,tileObjects)){ 
                randomAfterShift(tileObjects);
           } //change so that random after shift only happens if a change to the grid is made
            updateTiles(tileObjects);  //idk if this works yet
            gameState(tileObjects);
            for (let i = 0; i < tileObjects.length; i++) {
                let rowValues = [];
                for (let j = 0; j < tileObjects[i].length; j++) {
                    rowValues.push(tileObjects[i][j].value);
                }
                console.log(rowValues.join(' '));
            }
            
            break;
        case 'ArrowUp':
            
            shiftUp(tileObjects);
          if(matChanged(clonedArray,tileObjects)){
                randomAfterShift(tileObjects);
           }
            updateTiles(tileObjects);
            gameState(tileObjects);
            for (let i = 0; i < tileObjects.length; i++) {
                let rowValues = [];
                for (let j = 0; j < tileObjects[i].length; j++) {
                    rowValues.push(tileObjects[i][j].value);
                }
                console.log(rowValues.join(' '));
            }
            break;
        case 'ArrowRight':
            
            shiftRight(tileObjects);
          if(matChanged(clonedArray,tileObjects)){
                randomAfterShift(tileObjects);
           }
            updateTiles(tileObjects);
            gameState(tileObjects);
            for (let i = 0; i < tileObjects.length; i++) {
                let rowValues = [];
                for (let j = 0; j < tileObjects[i].length; j++) {
                    rowValues.push(tileObjects[i][j].value);
                }
                console.log(rowValues.join(' '));
            }
            
            break;
        case 'ArrowDown':
            
            shiftDown(tileObjects);
            if(matChanged(clonedArray,tileObjects)){
                randomAfterShift(tileObjects);
           }
            updateTiles(tileObjects);
            gameState(tileObjects);
            for (let i = 0; i < tileObjects.length; i++) {
                let rowValues = [];
                for (let j = 0; j < tileObjects[i].length; j++) {
                    rowValues.push(tileObjects[i][j].value);
                }
                console.log(rowValues.join(' '));
            }
            
            break;
    }



});






   






