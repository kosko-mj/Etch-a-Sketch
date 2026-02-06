const sketchContainer = document.getElementById('sketch-container');
const gridSizeBtn = document.getElementById('grid-size-btn');

const CONTAINER_SIZE = 960;
let currentGridSize = 16;

document.addEventListener('DOMContentLoaded', () => {
    createGrid(currentGridSize);
});

function createGrid(size) {
    console.log(`Creating ${size}x${size} grid...`);

    sketchContainer.innerHTML = '';

    const squareSize = CONTAINER_SIZE / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseenter', () => {
            square.classList.add('hovered');
        });

        sketchContainer.appendChild(square);

    }

    console.log(`Grid created with ${size * size} squares`);
}