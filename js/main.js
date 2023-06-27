//variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    dropZones = document.querySelectorAll(".drop-zone");
//store the dragged piece in a global variable
//we will need it in the handleDrop function    
let draggedPiece;

function changeBGImage() {
    //console.log("changeBGImage called");
    //url('../images/backGround0.jpg');
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`
}

function handleStartDrag() {
    //console.log("Started dragging this piece:", this)
    draggedPiece = this;
}

function handleDragOver(e) {
    e.preventDefault();
    //this will prevent the default dragover behaviour
    //e is short for event, could be e, evt a well
    console.log("dragged over me");
}







function handleDrop(e) {
    e.preventDefault();
    console.log("dropped something on me");
   //this line moves the dragged piece from the left side of the board
    //into whatever dropzone we choose.



  
    // This line of code checks if the drop zone already contains a puzzle piece

    if (this.children.length > 0) {
      console.log("Drop zone already contains a puzzle piece");
      return; // Drop rejected
    }
  
    // Moves the dragged piece to the drop area
    this.appendChild(draggedPiece);
  }
  
  //The adove line of code had errors and was responsible for puzzle pieces stacing on top of each other





//FOR RESET BUTTON
  function resetPuzzleBoard() {
    // Move puzzle pieces back to the puzzle-pieces div
    puzzlePieces.forEach(piece => {
        piece.style.left = '0';
        piece.style.top = '0';
        piece.style.transform = 'none';
        document.querySelector('.puzzle-pieces').appendChild(piece);
    });
}




//event Listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage)); 

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));




//for reset button

const resetButton = document.getElementById("resetBut");
resetButton.addEventListener("click", resetPuzzleBoard);
