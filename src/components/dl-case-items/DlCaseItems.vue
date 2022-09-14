<template>
  <div class="dl-user-items">
    <DlCaseItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @click="() => {}"
      page="open-case"
    />
  </div>
  <div v-if="hasNoItems" class="dl-user-no-items">
    <div class="dl-user-no-items__get">
      У вас нет предметов? <span>Давайте это исправим!</span>
    </div>
    <div class="dl-user-no-items__wrap">
      <div class="dl-user-no-items__block">
        <div class="dl-user-no-items__content-wrap">
          <DlCombination
            v-for="(combo, key) in combinations"
            :key="key"
            :combination="combo"
          />
        </div>
        <span class="dl-user-no-items__text">пополнить</span>
      </div>
      <div class="dl-user-no-items__block">
        <div class="dl-user-no-items__content-wrap">
          <DlCase
            v-for="(cas, index) in casesTmp"
            :key="index"
            :caseItem="cas"
            :catId="1"
          />
        </div>
        <span class="dl-user-no-items__text">открыть</span>
      </div>
    </div>
  </div>
</template>
<script src="./dl-case-items.js"></script>
