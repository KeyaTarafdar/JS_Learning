const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener('click',function(color){
    console.log(color.target);
    body.style.backgroundColor=color.target.id
  })
});
