
let tileObjects = [[{value:0},{value:0},{value:0},{value:0}],
                    [{value:0 },{value:0},{value:0},{value:0}],
                    [{value:0},{value:0},{value:0},{value:0}],
                    [{value:0},{value:0},{value:0},{value:0}]
                    ];
let currentScore=0;
let bestScore=0;
const gameState=(tileObjects)=>{
    for(let i=0;i<4;i++){
        for(let j=3;j>=0;j--){
             if(tileObjects[i][j].value==2048){
                console.log("YOU WON")
                return;
                
            }
        }
    }
        let count = 0;
        for(let i=0;i<4;i++){
            for(let j=3;j>=0;j--){
                 if(tileObjects[i][j].value!=0){
                    count +=1;
                }
            }
            }
            if(count==16){
                console.log("YOU LOST")
                 bestScore=0; 
          }
          for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if((tileObjects[i][j].value)== (tileObjects[i + 1][j].value)||(tileObjects[i][j].value)== (tileObjects[i][j + 1].value)){
                    console.log("GAME NOT OVER")
                }
            }
        }
  
        for(let i =0;i<3;i++){
          if(tileObjects[3][i].value== tileObjects[3][i + 1].value){
            console.log("GAME NOT OVER")
          }
  
              
      }
      for(let i =0;i<3;i++){
  
          if(tileObjects[i][3].value== tileObjects[i + 1][3].value){
            console.log("GAME NOT OVER")
          }
  }       
}

const randomStart = (tileObjects) => {
    // Reset all values to 0
    for (let i = 0; i < tileObjects.length; i++) {
        for (let j = 0; j < tileObjects[i].length; j++) {
            tileObjects[i][j].value = 0;
        }
    }

    
    
    let firstRow = Math.floor(Math.random() * 4);
    let firstCol = Math.floor(Math.random() * 4);
    let secondRow = Math.floor(Math.random() * 4);
    let secondCol = Math.floor(Math.random() * 4);

    while (firstRow == secondRow && firstCol == secondCol) {
        secondRow = Math.floor(Math.random() * 4);
        secondCol = Math.floor(Math.random() * 4);
    }

    tileObjects[firstRow][firstCol].value = (Math.random() < 0.25) ? 4 : 2;
    tileObjects[secondRow][secondCol].value = (Math.random() < 0.25) ? 4 : 2;
};

/*inverts the array so all values are replaced
 by 0 and all 0 are replaced by 1, if the,
random space chooen is a 1 then the new tile is placed.*/
const randomAfterShift=(tileObjects)=>{                                    
    const invertedArray = [];
    for (let i = 0; i < tileObjects.length; i++) {
        const row = tileObjects[i];
        const invertedRow = [];
    for (let j = 0; j < row.length; j++) {
        const invertedValue = row[j].value === 0 ? 1 : 0;  //if there is a 0 value put a 1 
        invertedRow.push({ value: invertedValue }); 
    }
        invertedArray.push(invertedRow); //push the inverted row to the bottom of the array
    }
    let randomUnfilledRow = (Math.floor(Math.random()*4));
    let randomUnfilledCol = (Math.floor(Math.random()*4));
    if(invertedArray[randomUnfilledRow][randomUnfilledCol].value==1){
        tileObjects[randomUnfilledRow][randomUnfilledCol].value = ((Math.random() < 0.25) ? 4 : 2);
    }else{
        while(invertedArray[randomUnfilledRow][randomUnfilledCol].value==0){
        randomUnfilledRow = Math.floor(Math.random()*4);
        randomUnfilledCol = Math.floor(Math.random()*4);
        }
        tileObjects[randomUnfilledRow][randomUnfilledCol].value = (Math.random() < 0.25) ? 4 : 2;
    }
    
}

//need to change this so it will
function addTiles(tileObjects){ //adds two tiles if they have the same value
    
    for(let i=0;i<4;i++){
        for(let j=0;j<3;j++){
             if((tileObjects[i][j].value!==0)&&((tileObjects[i][j].value)==(tileObjects[i][j+1].value))){
                
                /*put anotheer loop for if tileObjects[i][j].value)==(tileObjects[i][j+2].value) 
                with the for starting at j, i think. and what ever is moved set to 0
                */
                (tileObjects[i][j].value)=((tileObjects[i][j].value)*2);
                let temp=(tileObjects[i][j].value) 
                currentScore+=temp; //retrieves this to add to the score
                (tileObjects[i][j+1].value)=0;
             }
            }
        }
        document.getElementById("button").addEventListener("click", function() { //
            currentScore=0;
            let score =  document.getElementById('scorenumber');
            score.textContent = currentScore;
        });
        console.log("Current Score:", currentScore);
        return currentScore; //returns value to be added to the score
    
    }

function shiftTogether(tileObjects){ //moves tiles through empty space/compresses them 
    
    let newTilesGrid =  [[{value:0},{value:0},{value:0},{value:0}],
    [{value:0 },{value:0},{value:0},{value:0}],
    [{value:0},{value:0},{value:0},{value:0}],
    [{value:0},{value:0},{value:0},{value:0}]
    ];
 
    
    for(let i=0;i<4;i++){
       let position = 0;
       for(let j=0;j<4;j++){
        if (tileObjects[i][j].value !== 0) {
           newTilesGrid[i][position].value=(tileObjects[i][j].value);
           position++;
        }
      }
    }
    for (let i = 0; i < tileObjects.length; i++) {
        for (let j = 0; j < tileObjects[i].length; j++) {
            tileObjects[i][j].value = (newTilesGrid[i][j].value);
        }
    } //assigns shifted tiles to the global list
    
}
const transpose=(tileObjects)=>{
    
   let newTilesGrid =  [[{value:0},{value:0},{value:0},{value:0}],
   [{value:0 },{value:0},{value:0},{value:0}],
   [{value:0},{value:0},{value:0},{value:0}],
   [{value:0},{value:0},{value:0},{value:0}]
   ];

    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            newTilesGrid[j][i].value=tileObjects[i][j].value
            
            }
        }
        for (let i = 0; i < tileObjects.length; i++) {
            for (let j = 0; j < tileObjects[i].length; j++) {
                tileObjects[i][j].value = (newTilesGrid[i][j].value);
            }
        } 
    
}
function reverse(tileObjects) {
    for (let i = 0; i < tileObjects.length; i++) {
        tileObjects[i].reverse();
    }
}
/* combines tiles that have the same value from right to left
/is used to update value of the current score and best score*/

const shiftLeft=(tileObjects)=>{
    shiftTogether(tileObjects); // shifts togther
    let adder= addTiles(tileObjects); 
    shiftTogether(tileObjects); //combinesa again
    let score = document.getElementById("scorenumber");
    score.textContent=adder;
    console.log(adder);
    let best = document.getElementById("bestnumber");
    if(adder>=bestScore){
        bestScore=adder;
        best.textContent = bestScore; //upadates best only if there is new best
     }
}

const shiftRight=(tileObjects)=>{
    reverse(tileObjects) //reverse
    shiftLeft(tileObjects);
    reverse(tileObjects)
    
}
const shiftDown=(tileObjects)=>{  //calculations to do a donwshift of all tiles
  
    transpose(tileObjects);
    shiftRight(tileObjects);
    transpose(tileObjects);
    
}
const shiftUp=(tileObjects)=>{
   transpose(tileObjects);
   shiftLeft(tileObjects);
   transpose(tileObjects);
   
    
}
export{tileObjects,shiftLeft,shiftRight,shiftDown,shiftUp,randomAfterShift,gameState,randomStart,addTiles,transpose,reverse,shiftTogether};
/*
 The game will start by calling the randomStart(), wait for a user input to activate 
 one of the shift function. and then after each shift function the randomAfterShift() is called
 */
 
