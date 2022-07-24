import PersonalPage from '@/pages/PersonalPage/PersonalPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import AgreementPage from '../pages/AgreementPage/AgreementPage.vue';
import CasesPage from '../pages/CasesPage/CasesPage.vue';
import ContactsPage from '../pages/ContactsPage/ContactsPage.vue';
import PromotionPage from '../pages/PromotionPage/PromotionPage.vue';
import PartnerPage from '../pages/PartnerPage/PartnerPage.vue';
import ContractPage from '../pages/ContractPage/ContractPage.vue';
import UpgradePage from '../pages/UpgradePage/UpgradePage.vue';


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
  {
    path: '/contract',
    name: 'contract',
    component: ContractPage,
  },
  {
    path: '/upgrade',
    name: 'upgrade',
    component: UpgradePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
