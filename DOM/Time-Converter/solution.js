function attachEventsListeners() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');


    document.querySelector('main').addEventListener('click' , (ev)=>{
        if(ev.target.type == 'button'){
            const curr = (ev.target.parentNode.children[1]);
            const value = curr.value;
            if(curr.id == 'days'){
                hours.value = (value* 24)
                minutes.value = (value * 1440)
                seconds.value = (value * 86400)
            }else if(curr.id == 'hours'){
                days.value = (value / 24)
                minutes.value = (value * 60)
                seconds.value = (value * 3600)
            }else if(curr.id == 'minutes'){
                days.value = value / 1440
                hours.value = value / 60
                seconds.value = value * 60
            }else if(curr.id == 'seconds'){
                minutes.value = value / 60
                hours.value = value / 3600
                days.value = value / 86400
            };
        };
    });
};