# Sport2Meet

## Présentation du projet

Ce projet a été réalisé dans le cadre d'un cours de Developpement mobile (DevMobil) à la HEIG-VD. Ce projet a été réalisé tous le long du semestre, d'une part l'API a été créée dans le cours d'architecture orientée web (ArchiOWeb), puis l'application mobile par le suite dans le cours de DevMobil.

## Présentation de l'application

L'application Sport2Meet est une application qui permet de faire du sport avec d'autres personnes, connues ou non. Le but de cette application est de permettre à des personnes sportives et motivées d'organiser une activité sportive et que d'autres personnes la rejoignent.

## Explication des fonctionnalités

L'application a des fonctionnalités de base qui permettent de voir les activités déjà créée, des les rejoindre ou de les quitter. Il est également possible de pouvoir créer de nouvelles activités, des les modifier et des les supprimer.
Dans les rubriques suivantes, nous allons détailler les fonctionnalités de base et avancées par page.

### 1. Page d'accueil

La page d'accueil permet de voir les activités sur une carte grâce à leur géolocalisation. La carte se charge directement grâce à la position de l'utilisateur, ce qui permet de voir toute suite les activités qui se trouvent à proximité. Les activités auxquelles l'utilisateur est déjà inscrit s'affiche d'une couleur verte alors que les autres sont en orange. <br>
![image accueil](/resources/accueil.png)
L'utilisateur peut filtrer les activités qu'il veut voir via la page activité par sport et type en appuyant sur le bouton "filtre".<br>
![image filtre](/resources/filtre.png)
Lorsque l'utilisateur clique sur une activité, la rubrique correspondante s'affiche pour montrer les différentes caractéristiques de l'activité (titre, description, lieu, date).<br>
![image accueil](/resources/activite_accueil.png)
Depuis cette page, il est également possible d'ajouter une activité grâce au bouton "+".


### 2. Page des activités

La page des activités permet de voir les activités sous forme de liste. Comme pour la page précédente, les activités en vert sont les activités auxquelles l'utilisateur est déjà inscrit, les autres sont en orange.<br>
Lorsque l'utilisateur clique sur une activité, la page détaillée de l'activité s'ouvre (voir rubrique n°4).<br>
Depuis cette page, il est également possible de créer une activité grâce au bouton "+" ainsi que de filtrer les activités qui apparaissent avec le bouton "filtre".
![image activités](/resources/activites.png)

### 3. Création d'une activité

Tous les utilisateurs peuvent créer une activité. En cliquant sur le bouton plus de la page d'accueil ou des activités, l'utilisateur arrivera sur un formulaire où il doit renseigner :
- Le titre
- La date et l'heure
- La description
- Le sport parmis une liste donnée
- Le type d'activité (tournoi, évènement, entraînement, autre)
- Le nombre de participant maximum
- L'adresse complète (rue, npa, ville)
![image formulaire](/resources/formulaire.png)

### 4. Page d'activité

La page d'activité est un peu différente pour les visiteurs ou pour les participants à l'activité.<br>
La page de base se constitue des informations générales sur l'activité :
- Le titre
- La description
- Le sport
- Le lieu
- La date et l'heure
- Les participants et le nombre de place restante
- Le type (tournoi, évènement, entraînement, autre)
- Les potentielles images déjà mises

Ainsi que les boutons pour s'inscrire à l'activité.<br>
ICI IMAGE DE LA PAGE D'ACTIVITE NON-PARTICIPANT<BR>
Lorsque l'utilisateur est inscrit à l'activité, il a une rubrique "chat" en plus afin de discuter avec les autres participants. Le bouton "rejoindre l'activité" s'est également modifié en "quitter l'activité".<br>
Le participant peut également ajouter des photos dans l'album de l'activité.

ICI IMAGE DE LA PAGE ACTIVITE PARTICIPANT

### 5. Page de login

La page de login permet à l'utilisateur de se connecter et à accéder à sa page de profil. De plus, l'utilisateur doit être connecté pour pouvoir rejoindre une activité.<br>
L'utilisateur peut également cocher la case "Remember me" pour que l'application garde ses identifiants en mémoire.<br>
Si l'utilisateur n'a pas de compte, il peut directement accéder à la page SignUp pour s'enregistrer.<br>
![image login](/resources/login.png)

### 6. Page SignUp

La page SignUp permet à l'utilisateur de se créer un compte sur l'application. Il doit renseigner :
- Son email
- Son prénom
- Son nom
- Son mot de passe
![image signup](/resources/signup.png)