<template>
  <DlFilter
    :visible="visible"
    :gamer="gamer"
    :changeType="changeType"
    :changeActive="changeActive"
    :isActive="isActive"
    :filterType="filterType"
  />
  <DlUserItems
    v-if="filterType === 'box'"
    :items="visible ? filteredDrops : gamer.drops"
    :gift="gamer.gift"
    :page="page"
  />
  <DlUserContracts
    v-if="filterType === 'contract'"
    :contracts="gamer.contracts"
  />
</template>
<script src="./dl-user-contents.js"></script>
