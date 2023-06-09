let random = document.getElementById('button-random-color');
random.addEventListener('click', changeColor);
function changeColor(){
    const setBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.getElementsByClassName('color')[1].style.backgroundColor = "#" + randomColor;
        const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
        document.getElementsByClassName('color')[2].style.backgroundColor = "#" + randomColor2;
        const randomColor3 = Math.floor(Math.random()*16777215).toString(16);
        document.getElementsByClassName('color')[3].style.backgroundColor = "#" + randomColor3;}
      
      random.addEventListener("click", setBg);
      setBg();
}
function colorStore(){
const colors = {c1: 'randomColor', c2: 'randomColor2', c3: 'randomColor3'};
localStorage.setItem('colorPalette', JSON.stringify(colors));
}
colorStore();

const boxes = document.querySelectorAll('td');

for (const box of boxes) {
  box.classList.add('pixel');
}
document.getElementById('black').classList.add('selected');

const paleta = document.getElementById('color-palette');
paleta.addEventListener('click', (event) => {
    const colors = document.querySelectorAll('.color');
    for (let i = 0; i < colors.length; i += 1) {
      if (colors[i].classList.contains ('selected')) {
         colors[i].classList.remove ('selected');
        }
        event.target.classList.add ('selected');
        }
}); 

function painter() {
    const pixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].addEventListener('click', function() {
        pixel[i].style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
      });
    }
  }
  painter();

  let clear = document.querySelector('#clear-board');
  function reset () {
      let pixel = document.querySelectorAll('.pixel');
      clear.addEventListener ('click', function () {
      for (let i = 0; i < pixel.length; i += 1) {
        pixel[i].style.backgroundColor = 'white';
      }
  }
  )};
  reset ();

let pixel = document.querySelectorAll('.pixel');
localStorage.setItem('drawing', JSON.stringify(pixel));

function returnArt(){
    localStorage.getItem('drawing');
    localStorage.getItem('colorPalette'); 
}
window.onload = returnArt();