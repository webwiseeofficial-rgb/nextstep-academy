// Edit your courses here. Both pages read from this file.
window.PHONE = "213774129401";
window.COURSES = [
  { slug:"full-stack", title:"Full-Stack Development", tag:"Web", desc:"Maîtrisez le front-end et le back-end et créez des applications web complètes, de A à Z.", tools:["HTML/CSS/JS","Back-End","Bases de données"], modules:["Bases du web : HTML, CSS, JavaScript","Interfaces dynamiques et responsive","Serveur, API et bases de données","Projet final mis en ligne"] },
  { slug:"graphic-design", title:"Graphic Design Pro", tag:"Design", desc:"Créez des identités visuelles percutantes avec Photoshop et Illustrator.", tools:["Photoshop","Illustrator","Canva"], modules:["Principes de design et typographie","Retouche et composition","Logos et identité visuelle","Portfolio de projets"] },
  { slug:"video-editing", title:"Motion & Video Edit", tag:"Contenu", desc:"Montez des vidéos et animations professionnelles pour les réseaux sociaux.", tools:["Premiere Pro","After Effects"], modules:["Montage et rythme","Son, couleur et sous-titres","Animations avec After Effects","Vidéos prêtes à publier"] },
  { slug:"e-commerce", title:"E-commerce Masterclass", tag:"Business", desc:"Lancez et gérez votre boutique en ligne en Algérie, de zéro à vos premières ventes.", tools:["Boutique en ligne","Facebook Ads","Stratégie"], modules:["Choisir son produit et son marché","Créer sa boutique","Publicités et conversion","Livraison et suivi des commandes"], best:true },
  { slug:"python", title:"Python Academy", tag:"Code", desc:"Automatisation, scripts utiles et bases de la programmation Python pour débutants.", tools:["Python","Automatisation","Scripts"], modules:["Bases de Python","Fonctions et fichiers","Automatiser des tâches","Mini-projets"] },
  { slug:"digital-marketing", title:"Digital Marketing", tag:"Pub", desc:"Vendez avec Facebook, Instagram et TikTok Ads. Maîtrisez les conversions et la stratégie digitale.", tools:["Facebook Ads","TikTok","Instagram"], modules:["Stratégie et audience","Création de publicités","Suivi des résultats","Optimiser son budget"] }
];
window.wa = function(msg){ return "https://wa.me/"+window.PHONE+"?text="+encodeURIComponent(msg); };
