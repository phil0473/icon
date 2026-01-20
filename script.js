document.addEventListener('mousemove', (e) => {
    const stage = document.querySelector('.ocean-stage');
    
    // Calculate where the mouse is relative to the center of the screen
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    // Apply the rotation (TILT)
    stage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});