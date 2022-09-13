window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value= 100000
  document.getElementById("loan-years").value=35
  document.getElementById("loan-rate").value=6
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const updateValues = getCurrentUIValues()
  const monthly = calculateMonthlyPayment(updateValues)
  updateMonthly(monthly)

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthly = (values.amount * (values.rate/100/ 12)) / (1 - (1 + values.rate/100/12) ** (-values.years))
  monthly = Math.round(monthly * 100) / 100
  monthly = monthly.toString()
  return monthly
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = monthly
}
