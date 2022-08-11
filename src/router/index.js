import PersonalPage from '@/pages/PersonalPage/PersonalPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import AgreementPage from '@/pages/AgreementPage/AgreementPage.vue';
import CasesPage from '@/pages/CasesPage/CasesPage.vue';
import ContactsPage from '@/pages/ContactsPage/ContactsPage.vue';
import PromotionPage from '@/pages/PromotionPage/PromotionPage.vue';
import PartnerPage from '@/pages/PartnerPage/PartnerPage.vue';
import ContractPage from '@/pages/ContractPage/ContractPage.vue';
import UpgradePage from '@/pages/UpgradePage/UpgradePage.vue';
import PolicyPage from '@/pages/PolicyPage/PolicyPage.vue';
import CookiePage from '@/pages/CookiePage/CookiePage.vue';
import HelpPage from '@/pages/HelpPage/HelpPage.vue';
import ProfilePage from '@/pages/ProfilePage/ProfilePage.vue';
import OpenCasePage from '@/pages/OpenCasePage/OpenCasePage.vue';
import PageNotFound from '@/pages/PageNotFound/PageNotFound.vue';

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
  {
    path: '/profile/:id',
    name: 'profile',
    props: (route) => ({ id: route.params.id }),
    component: ProfilePage,
  },
  {
    path: '/open-case/:id',
    name: 'open-case',
    props: (route) => ({ id: route.params.id }),
    component: OpenCasePage,
  },
  // {
  //   path: '/open-case/*',
  //   name: 'PageNotFound',
  //   props: (route) => ({ id: route.params.id }),
  //   component: PageNotFound,
  // },
  {
    path: '/404',
    name: '404',
    component: PageNotFound,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // mode: 'history',
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
