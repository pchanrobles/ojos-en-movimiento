
try{

    const balls = document.querySelectorAll(".ball");
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX * 100 / window.innerWidth + "%";
        const y = e.clientY * 100 / window.innerHeight + "%";
    
    
        balls.forEach((ball) => {
    
            ball.style.left = x;
            ball.style.top = y;
            ball.style.transform = "traslate(-" + x + ",-" + y + ")";
    
    
        })
    });
    
    
}catch(err){
    console.log(err);
}
    
