function lockedProfile() {
    document.getElementById('main').addEventListener('click' , (ev) =>{

        if(ev.target.tagName == 'BUTTON'){
        const profile = ev.target.parentNode;
        const isUnlocked = profile.children[4].checked;
        const div = profile.querySelector('div');
        let isVisible = div.style.display === 'block';

        if(!isUnlocked){
            return;
        };

        div.style.display = isVisible ? 'none' : 'block';
        ev.target.textContent = !isVisible ? 'Hide it' : 'Show more';

    };
    });
};