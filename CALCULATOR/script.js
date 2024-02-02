let input = document.querySelector(".user-input");
let btn = document.querySelectorAll("button");

btn.forEach(element => {
    element.addEventListener("click", (el) => {
        if(el.target.textContent === 'AC'){
            input.innerHTML = "";
        } else if(el.target.textContent === 'DE'){
            input.innerHTML = input.innerHTML.slice(0,-1);
        }else if(el.target.textContent === '='){
            input.innerHTML = eval(input.innerHTML);
        }
         else {
            input.innerHTML += el.target.innerHTML; 
        }
    })
})