const palleteContainer= document.getElementById('palleteContainer');
const colorValues = ['1', '2','3','4','5','6','7','8','9','A','B','C','D','E','F'] ;
const PALLETE_SIZE = 5;

const CreatePallete=() => {
   for(let i =0; i < PALLETE_SIZE; i++) {
        const palleteElement = document.createElement('div');
        palleteElement.classList.add('palleteItem');
        palleteContainer.appendChild(palleteElement)
    }
    updatePallete();
}

const colorize=(element)=> {
    let color='#'
    for(let i =0; i < 6; i++) {
        const RandomElement = colorValues[Math.floor(Math.random() * colorValues.length)];
        color+=RandomElement; 
 };
  element.style.backgroundColor = color;
  element.innerHTML= `<span class='ColorHex'>${color}</span>`;
}

const updatePallete = () => {
    for (let i = 0; i < palleteContainer.children.length; i++) {
        colorize(palleteContainer.children[i])
 }
};

CreatePallete();