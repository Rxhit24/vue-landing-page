import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Services from './components/pages/Services.vue';
import Contact from './components/pages/Contact.vue';
import Terms from './components/pages/Terms.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
  { path: '/terms', component: Terms }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;