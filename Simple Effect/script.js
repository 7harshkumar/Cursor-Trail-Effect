document.addEventListener('DOMContentLoaded', () => {
    const numBalls = 30;
    const balls = [];
  
    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement('div');
      ball.classList.add('trail');
      document.body.appendChild(ball);
      balls.push(ball);
    }
  
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
  
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  
    function animateBalls() {
      let x = mouseX;
      let y = mouseY;
  
      balls.forEach((ball, index) => {
        ball.style.left = `${x}px`;
        ball.style.top = `${y}px`;
  
        ball.style.transform = `scale(${(numBalls - index) / numBalls})`;
  
        const nextBall = balls[index + 1] || balls[0];
        x += (nextBall.offsetLeft - x) * 0.2;
        y += (nextBall.offsetTop - y) * 0.2;
      });
  
      requestAnimationFrame(animateBalls);
    }
  
    animateBalls();
  });
  