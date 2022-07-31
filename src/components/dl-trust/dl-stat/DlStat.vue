<template>
  <div class="dl-stat">
    <div class="dl-stat__icon">
      <slot></slot>
    </div>
    <div class="dl-stat__content">
      <span class="dl-stat__count">
        {{ count }}
      </span>
      <div class="dl-stat__name">{{ nameStat }}</div>
    </div>
  </div>
</template>
<script src="./dl-stat.js"></script>
