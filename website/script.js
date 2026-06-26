document.addEventListener('DOMContentLoaded', () => {
    // Reveal elements on load
    const elements = document.querySelectorAll('.hero-content > *, .hero-visual');
    
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.1}s`;
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });

    // Dynamic 3D tilt effect for the visual card
    const card = document.querySelector('.glass-card');
    
    document.addEventListener('mousemove', (e) => {
        if(window.innerWidth < 992) return; // Disable on mobile/tablet
        
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset card position on mouse leave
    document.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(-5deg) rotateX(5deg)`;
        card.style.transition = 'transform 0.5s ease';
    });

    document.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });
});
