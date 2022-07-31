<template>
  <DlFilter
    :visible="visible"
    :gamer="gamer"
    :changeType="changeType"
    :changeActive="changeActive"
    :isActive="isActive"
    :filterType="filterType"
  />
  <DlUserItems :items="visible ? filteredDrops : gamer.drops" />
</template>
<script src="./dl-user-contents.js"></script>
