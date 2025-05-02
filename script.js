// DOM Elements
const dynamicText = document.getElementById('dynamic-text');
const styleTarget = document.getElementById('style-target');
const toggleElement = document.getElementById('toggle-element');
const elementContainer = document.getElementById('element-container');

// Buttons
const changeTextBtn = document.getElementById('change-text-btn');
const changeStyleBtn = document.getElementById('change-style-btn');
const removeElementBtn = document.getElementById('remove-element-btn');
const addElementBtn = document.getElementById('add-element-btn');

// Text options for dynamic changes
const textOptions = [
    "JavaScript is awesome!",
    "You changed this text!",
    "DOM manipulation is powerful!",
    "Web development is fun!",
    "This text is dynamic!"
];

// 1. Change Text Content Dynamically
changeTextBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    dynamicText.textContent = textOptions[randomIndex];
    
    // Add temporary animation
    dynamicText.classList.add('highlight');
    setTimeout(() => {
        dynamicText.classList.remove('highlight');
    }, 1000);
});

// 2. Modify CSS Styles via JavaScript
changeStyleBtn.addEventListener('click', () => {
    styleTarget.classList.toggle('highlight');
    
    // Update button text based on state
    changeStyleBtn.textContent = styleTarget.classList.contains('highlight') 
        ? 'Remove Styles' 
        : 'Toggle Styles';
});

// 3. Add/Remove Elements
removeElementBtn.addEventListener('click', () => {
    toggleElement.classList.add('hidden');
});

addElementBtn.addEventListener('click', () => {
    // Check if element exists but is hidden
    if (elementContainer.contains(toggleElement)) {
        toggleElement.classList.remove('hidden');
    } else {
        // Create new element if it doesn't exist
        const newElement = document.createElement('p');
        newElement.id = 'toggle-element';
        newElement.textContent = 'New element created!';
        elementContainer.appendChild(newElement);
    }
});

// Bonus: Change footer year dynamically
document.querySelector('footer p').textContent += ` © ${new Date().getFullYear()}`;
