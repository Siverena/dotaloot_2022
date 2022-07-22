<template>
  <div class="dl-socials">
    <DlSocial
      v-for="(social, index) in socials"
      :social="social"
      :key="index"
    />
  </div>
</template>
<script src="./dl-socials.js"></script>
