document.querySelectorAll('.indice a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mostrar/esconder botão ao rolar
window.addEventListener('scroll', function() {
    const btn = document.getElementById('btn-topo');
    if (window.scrollY > 300) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});

// Scroll suave ao topo
document.getElementById('btn-topo').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});