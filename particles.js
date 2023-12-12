document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.createElement('canvas');
    const container = document.querySelector('.particles');
    container.appendChild(canvas);
  
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 40;
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      createParticles();
    }
  
    function createParticles() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }
  
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 10 + 1;
            this.speedX = Math.random() * 2;
            this.speedY = Math.random() * -0.8;
            const colors = ['#00ff00b7', '#FFFFFF'];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        
            // Lista de diferentes opacidades
            this.opacity = Math.random() * 1; // Opacidades entre 0.5 e 1
          }
        
          update() {
            this.x += this.speedX;
            this.y += this.speedY;
        
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
              this.x = Math.random() * canvas.width;
              this.y = Math.random() * canvas.height;
            }
          }
        
          draw() {
            ctx.fillStyle = `rgba(${parseInt(this.color.slice(1, 3), 16)}, ${parseInt(this.color.slice(3, 5), 16)}, ${parseInt(this.color.slice(5, 7), 16)}, ${this.opacity})`; // Usa a cor e a opacidade
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
          }
    }
  
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
    }
  
    resizeCanvas();
    createParticles();
    animate();
  
    window.addEventListener('resize', resizeCanvas);
});

document.addEventListener('DOMContentLoaded', function() {
  const icons = document.querySelectorAll('.icons i');
  let index = 0;

  function showIcons() {
    if (index < icons.length) {
      icons[index].style.opacity = '1';
      index++;
      setTimeout(showIcons, 200); // Intervalo de tempo entre cada ícone (ajustável)
    }
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener('scroll', function() {
    if (isInViewport(document.querySelector('.container'))) {
      showIcons();
      window.removeEventListener('scroll', this);
    }
  });
});
