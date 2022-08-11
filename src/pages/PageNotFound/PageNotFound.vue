<template>
  <section class="dl-not-found">
    <p class="dl-not-found__error-code">404</p>
    <p class="dl-not-found__error-text">Страница не найдена</p>
    <router-link to="/" class="dl-not-found__link">на главную</router-link>
  </section>
</template>
<script>
export default {
  name: 'PageNotFound',
};
</script>
