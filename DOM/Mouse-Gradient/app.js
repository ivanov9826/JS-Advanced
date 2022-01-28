function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove' , onMove);

    function onMove(e){
        const percent = Math.floor(e.offsetX / e.target.clientWidth * 100);
        document.getElementById('result').textContent = percent + "%";
    };
};