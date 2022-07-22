<template>
  <section class="dl-events">
    <DlSectionHeader>СОБЫТИЯ</DlSectionHeader>
    <div class="dl-events__wrap">
      <DlEvent v-for="(event, index) in events" :event="event" :key="index" />
    </div>
  </section>
</template>
<script src="./dl-events.js"></script>
