<template>
  <div class="dl-user-items">
    <DlCaseItem
      v-if="page === 'personal'"
      :item="gift.item"
      :class="'dl-case-item--gift'"
    />
    <DlCaseItem
      v-for="(item, index) in items"
      :key="index"
      :item="item.item"
      :class="page === 'contract' ? 'dl-case-item--contract' : ''"
      @click="page === 'contract' ? handleClick(index, 'contract') : ''"
    />
  </div>
</template>
<script src="./dl-user-items.js"></script>
