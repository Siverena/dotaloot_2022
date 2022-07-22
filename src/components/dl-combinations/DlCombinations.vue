<template>
  <section class="dl-combinations">
    <DlSectionHeader> Комбинации</DlSectionHeader>
    <p class="dl-combinations__warning">
      Комбинации невозможно приобрести за уже имеющийся баланс!
    </p>
    <div class="dl-combinations__wrap">
      <DlCombination
        v-for="(combination, key) in combinations"
        :combination="combination"
        :key="key"
      />
    </div>
  </section>
</template>
<script src="./dl-combinations.js"></script>
