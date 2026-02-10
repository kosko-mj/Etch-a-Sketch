const sketchContainer = document.getElementById('sketch-container');
const gridSizeBtn = document.getElementById('grid-size-btn');
const colorKnob = document.getElementById('color-knob');
const darkenKnob = document.getElementById('darken-knob');

let currentGridSize = 100;
let randomColors = false;
let progressiveDarkening = false;

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

        // Track hover count for this square
let hoverCount = 0;

square.addEventListener('mouseenter', () => {
    hoverCount++;
    
    // Apply random colors if enabled
    if (randomColors) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else {
        square.style.backgroundColor = '#000'; // Default black
    }
    
    // Apply progressive darkening if enabled
    if (progressiveDarkening) {
        const darkness = Math.min(hoverCount * 10, 100); // 10% per hover, max 100%
        square.style.opacity = `${darkness}%`;
    } else {
        square.style.opacity = '100%';
    }
    
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

// Color knob click handler
colorKnob.addEventListener('click', () => {
    randomColors = !randomColors;
    colorKnob.classList.toggle('active', randomColors);
    console.log('Random colors:', randomColors ? 'ON' : 'OFF');
});

// Darken knob click handler
darkenKnob.addEventListener('click', () => {
    progressiveDarkening = !progressiveDarkening;
    darkenKnob.classList.toggle('active', progressiveDarkening);
    console.log('Progressive darkening:', progressiveDarkening ? 'ON' : 'OFF');
});