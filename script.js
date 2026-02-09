const sketchContainer = document.getElementById('sketch-container');
const gridSizeBtn = document.getElementById('grid-size-btn');

let currentGridSize = 100;

document.addEventListener('DOMContentLoaded', () => {
    createGrid(currentGridSize);
});

function createGrid(size) {
    console.log(`Creating ${size}x${size} grid...`);

    sketchContainer.innerHTML = '';
    
    // Get the actual rendered dimensions (matches CSS calculations)
    const containerWidth = sketchContainer.clientWidth;
    const containerHeight = sketchContainer.clientHeight;
    
    // Calculate square size to fill the grid
    const squareWidth = containerWidth / size;
    const squareHeight = containerHeight / size;
    
    console.log(`Container: ${containerWidth}x${containerHeight}px`);
    console.log(`Squares: ${squareWidth.toFixed(2)}x${squareHeight.toFixed(2)}px`);

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');

        square.style.width = `${squareWidth}px`;
        square.style.height = `${squareHeight}px`;

        square.addEventListener('mouseenter', () => {
            square.classList.add('hovered');
        });

        sketchContainer.appendChild(square);
    }

    console.log(`Grid created with ${size * size} squares`);
}

gridSizeBtn.addEventListener('click', () => {
    const userInput = prompt('Enter number of squares per side (max 100):', currentGridSize);
    const newSize = parseInt(userInput);
    
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }
    
    currentGridSize = newSize;
    createGrid(newSize);
});