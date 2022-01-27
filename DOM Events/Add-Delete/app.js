function addItem() {
    const input = document.getElementById('newItemText');
    const liElement = createElement('li' , input.value);
    input.value = '';
    const btn = createElement('a' , '[DELETE]');
    btn.addEventListener('click' , (ev) =>{
        ev.target.parentNode.remove();
    });
    liElement.appendChild(btn)
    document.getElementById('items').appendChild(liElement)


    function createElement (type , content){
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    };
};