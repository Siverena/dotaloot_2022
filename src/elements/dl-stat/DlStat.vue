<template>
  <div class="dl-stat dl-stat--online">
    <div class="dl-stat__content">
      <div class="dl-stat__icon">
        <slot></slot>
      </div>
      <span class="dl-stat__count">
        {{ count }}
      </span>

      <div class="dl-stat__name">{{ nameStat }}</div>
    </div>
  </div>
</template>
<script src="./dl-stat.js"></script>
