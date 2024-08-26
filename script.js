window.addEventListener("load", function(event) {
const color = document.querySelector('.color');
const width = document.querySelector('.width');
const height = document.querySelector('.height');
const addFigure = document.querySelector('.btn');
const body = document.body;
let figuresData = JSON.parse(localStorage.getItem('figures')) || [];

function showFigure() {
    const block = document.createElement('div');
    block.style.width = `${width.value}px`;
    block.style.height  = `${height.value}px`;
    block.style.backgroundColor = color.value;
    block.style.display = 'flex'; 
    block.style.justifyContent = 'space-around'; 
    block.style.alignItems = 'center'; 

    const sizeInfo = document.createElement('span');
    sizeInfo.textContent = `Width: ${width.value}px, Height: ${height.value}px`;
    sizeInfo.style.fontSize = '10px'; 
    

    block.innerHTML += sizeInfo.outerHTML;

    figuresData.push({
        width: width.value,
        height: height.value,
        color: color.value
    });
    localStorage.setItem('figures', JSON.stringify(figuresData));
    body.append(block);
}

addFigure.addEventListener('click', showFigure) });