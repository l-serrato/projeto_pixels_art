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