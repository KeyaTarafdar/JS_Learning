const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please give a valid height!";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please give a valid weight!";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>BMI is: ${bmi}</span>`;
    
    const div = document.createElement("div");
    if (bmi < 18.6) {
      div.innerText = "Under weight!!";
      result.appendChild(div);
      div.style.color = "red";
    } else if (bmi > 24.9) {
      div.innerText = "Over weight!!";
      result.appendChild(div);
      div.style.color = "red";
    }else{
      div.innerText = "Normal weight";
      result.appendChild(div);
      div.style.color = "green";
    }
  }
});
