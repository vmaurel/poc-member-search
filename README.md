### POC de recherche de participant - Atelier pour la COOP

Cette app est une démo de table triable, filtrable et incluant la pagination faite en REACT avec des composents facilement réutilisables.
Le tri, le filtre et la pagination se font client-side et restent très performants jusqu'à plus de 100.000 records
On note des ralentissements autour de 500k records et +

l'idée est de charger l'ensemble des participants auxquels ont accès les utilisateurs dans le cas des promoteurs ou des conseillers par exemple
Pour un employé on pourrait charger l'ensemble des participants du contrat qu'on taperait dans un textbox par exemple (dans un call ajax).

### Pré - requis

Pour pouvoir faire fonctionner l'app, il faut tout d'abord avoir un serveur de backend
Il est fourni un fake serveur de node.js dans le dossier /recherche-part-api-node
Si vous voulez exécuter ce projet en local ou le déployer sur un serveur, il faut modifier l'addresse du endpoint dans /src/services/membersService.js
Sinon, le fake server est déjà déployé sur heroku et fonctionne

**_ NOTE: Si vous utilisez le serveur qui est sur heroku, il faut lancer l'app une premiere fois puis la relancer ensuite pour se faire un idée du temps de téléchargement - en effet le serveur heroku est en 'sleep' la plupart du temps et se lance lors du premier appel car c'est sur l'offre gratuite de heroku _**

### Lancer l'app

lors de la première utilisation (node.js doit être installé sur votre poste):
npm i

ensuite:
npm start
