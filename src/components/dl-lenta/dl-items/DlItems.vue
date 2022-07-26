<template>
  <div class="dl-drophistory__items">
    <DlItem v-for="drop in drops" :key="drop.drop_id" :drop="drop" />
  </div>
</template>
<script src="./dl-items.js"></script>
