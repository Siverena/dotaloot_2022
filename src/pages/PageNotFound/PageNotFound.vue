<template>
  <div class="container">
    <DlSectionHeader>404 - Страница не найдена</DlSectionHeader>
    <section class="dl-help">Упс! Такой страницы не существует</section>
  </div>
</template>
<script>
import DlSectionHeader from '@/elements/dl-section-header/DlSectionHeader.vue';
export default {
  name: 'PageNotFound',
  components: {
    DlSectionHeader,
  },
};
</script>
