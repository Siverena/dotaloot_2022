<template>
  <div class="dl-user-items">
    <DlCaseItem
      v-for="(item, index) in items"
      :key="index"
      :item="item.item"
      :class="page === 'contract' ? 'dl-case-item--contract' : ''"
      @click="handleClick(index, 'contract')"
    />
  </div>
</template>
<script src="./dl-user-items.js"></script>
