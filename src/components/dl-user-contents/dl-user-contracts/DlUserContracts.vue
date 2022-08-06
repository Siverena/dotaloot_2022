<template>
  <div v-if="contracts" class="dl-user-contracts">
    <DlUserContract
      v-for="(item, index) in contracts"
      :key="index"
      :item="item.item"
      :compound="item.items"
      :handleClick="showDetailContract"
      :index="index"
    />
  </div>
  <DlUserContractDetail v-if="visibleDetail" :contract="currentContract" />
</template>
<script src="./dl-user-contracts.js"></script>
