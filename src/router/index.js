import PersonalPage from '@/pages/PersonalPage/PersonalPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import AgreementPage from '../pages/AgreementPage/AgreementPage.vue';
import CasesPage from '../pages/CasesPage/CasesPage.vue';
import ContactsPage from '../pages/ContactsPage/ContactsPage.vue';
import PromotionPage from '../pages/PromotionPage/PromotionPage.vue';
import PartnerPage from '../pages/PartnerPage/PartnerPage.vue';
import ContractPage from '../pages/ContractPage/ContractPage.vue';
import UpgradePage from '../pages/UpgradePage/UpgradePage.vue';
import PolicyPage from '../pages/PolicyPage/PolicyPage.vue';
import CookiePage from '../pages/CookiePage/CookiePage.vue';
import HelpPage from '../pages/HelpPage/HelpPage.vue';

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
  {
    path: '/policy',
    name: 'policy',
    component: PolicyPage,
  },
  {
    path: '/сookie',
    name: 'сookie',
    component: CookiePage,
  },

  {
    path: '/help',
    name: 'help',
    component: HelpPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

// https://mylinuxconfig.com/tutorial/how-to-add-loading-indicators-to-a-vue-js-application#1

// router.beforeResolve((next) => {
//   next();
// });

// router.afterEach(() => {});

export default router;
