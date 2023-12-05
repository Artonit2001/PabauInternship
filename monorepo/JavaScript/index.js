const checkboxForm = document.getElementById("myForm");
function shuffleValues() {
  const checkboxes = Array.from(
    document.querySelectorAll('#myForm input[type="checkbox"]')
  );
  checkboxes.sort(() => Math.random() - 0.5);
  checkboxes.forEach((checkbox) =>
    checkboxForm.appendChild(checkbox.parentNode)
  );
}

function changeValues() {
  const checkboxes = Array.from(
    document.querySelectorAll('#myForm input[type="checkbox"]')
  );
  checkboxes.forEach((checkbox, index) => {
    const label = checkbox.parentNode;
    if (label) {
      label.textContent = " New Value";
      label.prepend(checkbox);
    }
  });
}

function showSelectedValues() {
  const checkboxes = Array.from(
    document.querySelectorAll('#myForm input[type="checkbox"]')
  );
  const selectedValues = checkboxes
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  document.getElementById("selectedValues").textContent =
    selectedValues.join(", ");
}
