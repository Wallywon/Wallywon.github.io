document.addEventListener('DOMContentLoaded', function() {
    // Animation de navigation exemple
    const navItems = document.querySelectorAll('nav ul li a');

    navItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#FFD700'; // Or couleur adaptée
            item.style.color = '#000000';
        });
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = 'transparent';
            item.style.color = '#ffffff';
        });
    });
});
