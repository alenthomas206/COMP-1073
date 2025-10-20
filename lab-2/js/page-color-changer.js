//references to sliders and the HTML element
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const page = document.documentElement;

// Function to change the background colour based on slider values
function updateBackgroundColour() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;
    page.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
