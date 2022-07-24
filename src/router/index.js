import PersonalPage from '@/pages/PersonalPage/PersonalPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import AgreementPage from '../pages/AgreementPage/AgreementPage.vue';
import CasesPage from '../pages/CasesPage/CasesPage.vue';
import ContactsPage from '../pages/ContactsPage/ContactsPage.vue';
import PromotionPage from '../pages/PromotionPage/PromotionPage.vue';
import PartnerPage from '../pages/PartnerPage/PartnerPage.vue';
import ContractsPage from '@/pages/ContractsPage/contracts-page';

const routes = [
  {
    path: '/',
    name: 'cases',
    component: CasesPage,
  },
  {
    path: '/agreement',
    name: 'agreement',
    component: AgreementPage,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsPage,
  },
  {
    path: '/contracts',
    name: 'contracts',
    component: ContractsPage,
  },
  {
    path: '/promotion',
    name: 'promotion',
    component: PromotionPage,
  },
  {
    path: '/personal',
    name: 'personal',
    component: PersonalPage,
  },
  {
    path: '/partner',
    name: 'partner',
    component: PartnerPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
