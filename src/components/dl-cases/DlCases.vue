<template>
  <section class="dl-cases">
    <DlSectionHeader><slot></slot></DlSectionHeader>
    <div class="dl-cases__wrap">
      <DlCase
        v-for="(caseItem, key) in cases"
        :caseItem="caseItem"
        :key="key"
      />
    </div>
  </section>
</template>
<script src="./dl-cases.js"></script>
