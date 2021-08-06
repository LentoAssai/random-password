const button = document.querySelector('button');
const span = document.querySelector('span');

button.addEventListener('click', handleBtnClick);

function handleBtnClick(event) {
  event.preventDefault();
  const pwArray = [];
  for (let i = 0; i < 10; i++) {
    const randNum = Math.floor(Math.random() * 95) + 32;
    pwArray.push(String.fromCharCode(randNum));
  }
  span.innerText = pwArray.toString().replaceAll(',', '');
}
