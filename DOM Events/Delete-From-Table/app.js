function deleteByEmail() {
    const table = document.querySelector('label')
    console.log(table);
    const btn = document.createElement('button')
    btn.textContent = 0;
    table.appendChild(btn)

    const email = document.querySelector('input[name = "email"]').value;
    const rows = [...document.querySelectorAll('tbody tr')];
    const result = document.getElementById('result')
    let deleted = false
    for(let row of rows){
        let td = row.children[1].textContent
        if(email == td){
            row.parentNode.removeChild(row);
            deleted = true
            result.textContent = 'Deleted'
        };
    };
    if(deleted != true){
        result.textContent = 'Not found'
    }
}