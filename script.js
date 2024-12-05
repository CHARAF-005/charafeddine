document.addEventListener('DOMContentLoaded', () => { /*attend que tout le contenu HTML de la page soit chargé avant d'exécuter le code à l'intérieur. */
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    // Vérifie si un mode est déjà stocké dans localStorage
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        modeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Icône de la lune pour le mode sombre
        console.log('Mode clair activé au chargement');
    }

    // Fonction pour basculer entre les modes
    modeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode'); // Bascule entre les classes
        if (body.classList.contains('light-mode')) {
            modeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Icône de la lune, on est dans le mode clair, mais on peut basculer par ce bouton
            localStorage.setItem('theme', 'light'); // Sauvegarde le mode clair
            console.log('Mode clair activé');
        } else {
            modeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Icône du soleil
            localStorage.setItem('theme', 'dark'); // Sauvegarde le mode sombre
            console.log('Mode sombre activé');
        }
    });
});
