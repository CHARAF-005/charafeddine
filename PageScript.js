/** Basculer l'icône du menu de la barre de navigation */
let iconeMenu = document.querySelector('#menu-icon'); // Sélectionne l'icône du menu
let barreNavigation = document.querySelector('.navbar'); // Sélectionne la barre de navigation

// Lors du clic sur l'icône du menu, on ajoute/retire des classes(bx-x et active) pour afficher/masquer les 3 barres/la croix
iconeMenu.onclick = () => {
    iconeMenu.classList.toggle('bx-x'); // Change l'icône du menu ==> afficher la croix
    barreNavigation.classList.toggle('active'); // Affiche ou masque la barre de navigation
};

/*Quand on clique sur un lien de la barre de navigation, il devient bleu quand on est dans la section correspondante ! */
let sections = document.querySelectorAll('section'); // Sélectionne toutes les sections de la page
let liensNavigation = document.querySelectorAll('header nav a'); // Sélectionne tous les liens de navigation

// Lors du défilement de la page, on vérifie si une section est visible
window.onscroll = () => {
    sections.forEach(section => {
        let positionScroll = window.scrollY;  //La position verticale actuelle du défilement (en pixels) par rapport au haut de la page.
        let decalage = section.offsetTop - 150; // La position du décalage par rapport à l'haut de la page(px) - 150(px).
        let hauteur = section.offsetHeight; // La position du décalage par rapport à la hauteur
        let idSection = section.getAttribute('id'); // ID de la section pour identifier le lien correspondant

        // *Si la section est visible*, on applique la classe active au lien correspondant
        if (positionScroll >= decalage && positionScroll < decalage + hauteur){ 
            liensNavigation.forEach(lien => {
                lien.classList.remove('active'); // Supprime la classe active de *tous* les liens
                document.querySelector('header nav a[href*=' + idSection + ']').classList.add('active'); // Ajoute la classe active au lien correspondant
            });
            // Active l'animation de la section visible
            section.classList.add('show-animate');
        }
        // *Si la section n'est pas visible*, on retire l'animation
        else{
            section.classList.remove('show-animate');
        } 
    });

    /* Barre de navigation collante */
    let entete = document.querySelector('header'); // Sélectionne l'élément header
    entete.classList.toggle('sticky', window.scrollY > 100); // Ajoute la classe sticky(reste fixée en haut de la fenêtre). si la position du scroll est > 100px

    /* Retirer l'icône du menu et la barre de navigation quand on clique sur un lien de la barre de navigation (au défilement) */
    iconeMenu.classList.remove('bx-x'); // Réinitialise l'icône du menu
    barreNavigation.classList.remove('active'); // Ferme la barre de navigation
};

/* Révélation au défilement */
ScrollReveal({
    // Paramètres de base de l'animation
    distance: '80px', // Distance de l'animation
    duration: 2500, // Durée de l'animation
    delay: 200 // Délai avant le début de l'animation
});

// Animation pour différents éléments de la page
ScrollReveal().reveal('.home-img', {
    origin: 'bottom',
    scale: 0.5, // Démarre à 50% de la taille
    rotate: {
        x: 0,
        y: 60, // Rotation sur l'axe Y pour un effet 3D
        z: 15 // Légère rotation sur l'axe Z pour un effet de profondeur
    },
    opacity: 0, // Commence totalement transparent
    easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)', // Courbe d'accélération pour un effet dramatique
    reset: false, // L'animation ne se répète pas
    beforeReveal: (el) => {
        el.style.filter = 'blur(8px)'; // Applique un flou avant l'animation
    },
    afterReveal: (el) => {
        el.style.transition = 'filter 0.6s ease-out';
        el.style.filter = 'blur(0)'; // Enlève le flou après l'animation
    }
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'left' });
ScrollReveal().reveal('.home-img, .services-container, .Portfolio-box, .contact form', { origin: 'top' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });

/* Animation de texte avec Typed.js(bibliothèque) */
const typed = new Typed('.text', {
    strings: ['étudiant en informatique'], // Texte à afficher
    typeSpeed: 100, // Vitesse de frappe
    backSpeed: 100, // Vitesse de retour en arrière
    backDelay: 1000, // Délai avant de revenir en arrière
    loop: true // Répète le texte indéfiniment
});

// Animation d'un container avec un pourcentage
ScrollReveal().reveal('.container', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 300,
    beforeReveal: function(el) {
        let pourcentage = el.getAttribute('data-percentage'); // Récupère le pourcentage
        let pourcentageNumerique = parseFloat(pourcentage.replace('%', '')); // Convertit le pourcentage en nombre
        let hauteurPourcentage = pourcentageNumerique + '%'; // La hauteur en pourcentage
        el.querySelector('.fill-container').style.setProperty('--percentage', hauteurPourcentage); // Applique le pourcentage à l'élément
        el.classList.add('fill'); // Ajoute la classe pour déclencher l'animation
    }
});

// Ajouter un événement de soumission pour afficher un récapitulatif des données du formulaire
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche l'envoi réel du formulaire

    // Récupérer les données saisies dans le formulaire
    const nomComplet = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const numeroMobile = document.getElementById('mobile-number').value;
    const sujet = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Construire un message de récapitulatif
    const messageAlerte = `Merci pour votre message, ${nomComplet} !\n\nVoici un récapitulatif :\n
Nom : ${nomComplet}
Email : ${email}
Numéro de téléphone : ${numeroMobile}
Sujet : ${sujet}
Message : ${message}`;

    // Afficher le récapitulatif dans une alerte
    alert(messageAlerte);
});
