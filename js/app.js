const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

//DOM
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//event
btn.addEventListener('click', () =>{
  console.log('click works.');
  const randomNumber = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
})