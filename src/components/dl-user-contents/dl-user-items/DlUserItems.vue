<template>
  <div class="dl-user-items">
    <DlCaseItem v-for="item in items" :key="item.item.id" :item="item.item" />
  </div>
</template>
<script src="./dl-user-items.js"></script>
