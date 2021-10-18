function solve(steps , stepLength , speed){
    let distance = steps * stepLength
    let breaks = Math.floor(distance / 500)* 60
    speed = speed * 1000 / 3600
    let time = distance / speed + breaks 
    let hours = Math.floor(time/3600).toFixed(0).padStart(2 , '0')
    let minutes = Math.floor((time - hours * 3600)/60).toFixed(0).padStart(2 , '0')
    let seconds = (time - (hours * 60) * 60 - minutes * 60).toFixed(0).padStart(2 , '0')
    
    console.log(`${hours}:${minutes}:${seconds}`);
}

solve(4000 , 0.60 , 5)