// Получите все элементы custom select
const customSelects = document.querySelectorAll('.custom-select');

customSelects.forEach(customSelect => {
  const selectSelected = customSelect.querySelector('.select-selected');
  const selectOptions = customSelect.querySelector('.select-options');
  const selectOptionItems = customSelect.querySelectorAll('.select-option');

  // Открывает/закрывает список при клике на .select-selected
  selectSelected.addEventListener('click', function() {
    selectOptions.style.display = selectOptions.style.display === 'block' ? 'none' : 'block';
  });

  // Обработка выбора опции
  selectOptionItems.forEach(option => {
    option.addEventListener('click', function() {
      selectSelected.textContent = option.textContent;
      selectOptions.style.display = 'none';
    });
  });

  // Закрыть список, если клик происходит вне области custom select
  document.addEventListener('click', function(event) {
    if (!customSelect.contains(event.target)) {
      selectOptions.style.display = 'none';
    }
  });
});

document.querySelector('.burger').addEventListener('click',function() {
  this.classList.toggle('active');
  document.querySelector('.navbar').classList.toggle('open');
})