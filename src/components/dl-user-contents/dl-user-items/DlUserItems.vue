<template>
  <div class="dl-user-items">
    <DlCaseItem
      v-if="page === 'personal'"
      :item="gift.item"
      :class="'dl-case-item--gift'"
    />
    <DlCaseItem
      v-for="(item, index) in items"
      :key="item.id"
      :item="item.item"
      :class="page === 'contract' ? 'dl-case-item--contract' : ''"
      @click="page === 'contract' ? handleClick(index, 'contract') : ''"
      :page="page"
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
<script src="./dl-user-items.js"></script>
