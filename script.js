var $totalAmount = document.querySelector(".totalAmount");
var $tipAmount = document.querySelector(".tipAmount");
var $pepoleAmount = document.querySelector(".pepoleAmount");
let $calculateBtn = document.querySelector(".calculateBtn");
let $resultArea = document.querySelector(".resultArea");
let $resetBtn = document.querySelector(".resetBtn");

$calculateBtn.addEventListener("click", () => {
  if ($totalAmount.value === "") {
    $resultArea.innerHTML = "Enter total Price!";
  } else if ($pepoleAmount.value === "" || $pepoleAmount.value === "0") {
    $pepoleAmount.value = "1";
  } else {
    calculate();
    saveToLocalStorage();
  }
});

$resetBtn.addEventListener("click", () => {
  $totalAmount.value = "";
  $tipAmount.value = "";
  $pepoleAmount.value = "";
  $resultArea.innerHTML = "";
  localStorage.clear("per person");
});

function calculate() {
  const amount = Number($totalAmount.value);
  const tip = Number($tipAmount.value);
  const pepole = Number($pepoleAmount.value);
  const result = Number((amount + tip) / pepole);
  $resultArea.innerHTML = result.toFixed(2) + "$ per person";
}

function saveToLocalStorage() {
  localStorage.setItem("per person", JSON.stringify($resultArea.innerHTML));
}
