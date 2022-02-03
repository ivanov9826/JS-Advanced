function addItem() {
    const itemText = document.getElementById('newItemText');
    const itemValue = document.getElementById('newItemValue');
    const newOption = document.createElement('option');
    newOption.textContent = itemText.value;
    newOption.value = itemValue.value;
    itemText.value = '';
    itemValue.value = '';

    document.getElementById('menu').appendChild(newOption);
    
};