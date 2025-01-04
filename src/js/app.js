const display = document.querySelector('.screen-text');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.onclick = () => {
    if (button.id === 'clear') {
      display.textContent = "";
    } else if (button.id === 'backspace') {
      let string = display.textContent;
      display.textContent = display.textContent.substring(0, string.length - 1);
    } else if (display.textContent !== '' && button.id === 'equals') {
      display.textContent = eval(display.textContent);
    } else if (display.textContent === '' && button.id === 'equals') {
      display.textContent = "NULL!!!!"
      setTimeout(() => {
        display.textContent = "";
      }, 2000)
    } else {
      display.textContent += button.id;
    }
  }
})

// toggle Theme

const toggle = document.querySelector('.toggle');
const dark = document.querySelector('.background');

toggle.onclick = () => {
  dark.classList.toggle("dark");
}
