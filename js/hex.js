const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

//DOM
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//event
btn.addEventListener('click', () =>{
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomHex()];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
})

function randomHex() {
  return Math.floor(Math.random() * hex.length);
}