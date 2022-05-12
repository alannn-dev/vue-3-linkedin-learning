# vuejs3-linkedin-project

# Vue (Cheat sheet)

# Qu’est-ce que Vue.js ?
Vue.js est un framework progressif pour JavaScript utilisé pour créer des interfaces Web et des applications d'une page (SPA). Vue.js peut également être utilisé pour le développement d'applications de bureau et mobiles avec les frameworks Ionic et Electron.

# Pourquoi Vue.js
Avant d’utiliser un framework il est important de comprendre dans quel contexte il s’avère le bon outil.

Voici donc la liste des différentes raisons qui pourraient justifier l’utilisation d’un framework comme Vue.js

Organisation de votre code
Efficacité/rapidité de développement
Ré utilisabilité du code
Maintenance et future développement

# Comment Utiliser/installer Vue.js
Vue est un framework dit progressif. Vous pouvez l’utiliser juste dans une petite partie de votre page web ou si vous préférez vous pouvez construire une application entière avec Vue.js.

Voici ce qu'il faut faire pour utiliser Vue seulement dans une partie de votre page web :

Ajouter un tag 'script' qui contient un lien vers la librairie Vue.js
Ajouter un autre tag 'script' qui contient un lien vers votre fichier application Vue (app.js)
Créer une div avec id="app" qui servira de conteneur au rendu de votre application Vue.


# Les directives Vue.js

Les directives Vue.js sont des attributs HTML qui peuvent être insérés dans votre page afin de modifier le rendu de votre application Vue.

Voici la liste des directives disponible:

# v-bind 

Permet d'assigner une expression à un attribut. Vue va remplacer l'expression par sa valeur

# v-bind sur l'attribut "class" et les "style"
Il est possible de faire un v-bind sur l'attribut class et style

# v-once

Avec la directive v-once Vue va interpolé l'expression seulement une fois. L'expression sera donc ignorée pour tous les autres rafraîchissements

# v-html

Permet d'afficher une expression avec des tags HTML.

# v-model

Permet de lier la valeur d'un champ de saisie avec une variable. Si vous modifiez l'un ou l'autre Vue mettra à jour automatiquement l'autre. Du coup, la variable et le champ de saisie auront toujours la même valeur.

# v-if, v-else-if et v-else

Rend un élément visible ou invisible selon la valeur vrai ou faux de l'expression. Lorsque non visible l'élément n'est pas rendu dans le html

# v-show

Rends un élément visible ou invisible selon la valeur vrai ou faux de l'expression. Par contre, l'élément reste toujours présent dans le rendu. Lorsque non visible l'élément est rendu avec l'attribut CSS: display: none;

# v-for

Permet d'afficher une liste d'élément

# Ref

Permet à votre application Vue d'identifier un élément HTML et d'effectuer des actions sur cet élément.

# L'élément < template>

Cet élément permet d'utiliser des directives de Vue sans créer un élément html.


# Les Événements

Vue permet de gérer les événements javascript comme click, input, change, etc. Pour ce faire vous devez utiliser la directive v-on: suivi du nom de l'évènement.

# v-on:click

Permet d'exécuter du code sur le click d'un élément

# v-on:keydown

Permet d'exécuter du code sur l'appuie d'une touche (ex. enter)

Autre valeurs possible pour v-on:keydown, keyup, keypress

Autre valeur possibles pour .enter, tab, esc, up, down, left, right, delete
Ex: <div @keydown.left="bougeGauche" @keydown.right="bougeDroite" @keydown.up="bougeHaut" @keydown.down="bougeBas">

# v-on :submit

Permet d'exécuter du code lors de la soumission d'un formulaire

# Les méthodes

Vue js permet de créer des méthodes afin d'y placer un block de code réutilisable dans votre application.

# Les "Components" et sous "components"

Chaque élément distinct de votre page devra avoir son propre component. Par exemple la barre de navigation pourrait être contenue dans un component NavBar et réutilisé sur plusieurs pages.
