const display=document.querySelector(".screen-text"),buttons=document.querySelectorAll("button");buttons.forEach((button=>{button.onclick=()=>{if("clear"===button.id)display.textContent="";else if("backspace"===button.id){let t=display.textContent;display.textContent=display.textContent.substring(0,t.length-1)}else""!==display.textContent&&"equals"===button.id?display.textContent=eval(display.textContent):""===display.textContent&&"equals"===button.id?(display.textContent="NULL!!!!",setTimeout((()=>{display.textContent=""}),2e3)):display.textContent+=button.id}}));const toggle=document.querySelector(".toggle"),dark=document.querySelector(".background");toggle.onclick=()=>{dark.classList.toggle("dark")};