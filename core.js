const radioButtons = document.querySelectorAll('input[type="radio"]');
const checkbox = document.getElementById('checkbox1');

radioButtons.forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.checked) {
      checkbox.checked = true;
    }
  });
});

alert("Я JavaScript!");