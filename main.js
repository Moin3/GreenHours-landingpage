const slider = document.querySelector(".slider");
const navLinks = document.querySelector(".nav-links");

slider.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});


// claculation part

function calculateProfit() {
  const plan = document.getElementById("plan").value;
  const deposit = document.getElementById("deposit").value;
  const min = Number(document.getElementById("plan").selectedOptions[0].dataset.min);
  const max = Number(document.getElementById("plan").selectedOptions[0].dataset.max);
  let profit = 0;

  if (deposit >= min && deposit <= max) {
    switch (plan) {
      case "plan1":
        profit = deposit * 1.001;
        break;
      case "plan2":
        profit = deposit * 1.002;
        break;
      case "plan3":
        profit = deposit * 1.02;
        break;
      case "plan4":
        profit = deposit * 1.2;
        break;
      case "plan5":
        profit = deposit * 1.2;
        break;
    }
  }

  document.getElementById("profit").value = profit.toFixed(2)+'$';
}
