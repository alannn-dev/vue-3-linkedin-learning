import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import NotFound from "../views/NotFound.vue";
import ProductDetails from "../views/ProductDetails.vue";


const routes = [
  {
    path: "/", // Chemin de l'url
    name: "Home", // Nom facultatif lorsque nous établissons un lien vers cette route
    component: Home // Nom composant qui sera chargé lorsque la route est appelée
  },
  {
    path: "/contactez-nous", // Redirection URL /contactez-nous ou alias: /contact fonctionneront toutes les deux
    name: "Contact",
    component: Contact, 
    alias: "/contact"
  },
  {
    path: '/products/:name', // Lien avec paramètres
    name: "product-details",
    component: ProductDetails,
    props: true
  },
  {
    path: '/:catchAll(.*)', // Pour gérer les pages erreur 404 (Si aucun lien précedent : afficher composant NotFound)
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
