// script.js - Particles Animation and Interactive Features

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticle(e) {
    const x = e.x;
    const y = e.y;
    const size = Math.random() * 5 + 1;
    const speedX = (Math.random() - 0.5) * 2;
    const speedY = (Math.random() - 0.5) * 2;
    particles.push({ x, y, size, speedX, speedY });
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fill();
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
            particles.splice(index, 1);
        }
    });
}

window.addEventListener('mousemove', createParticle);

function animate() {
    drawParticles();
    requestAnimationFrame(animate);
}

animate();