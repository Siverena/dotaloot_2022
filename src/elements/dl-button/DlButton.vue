<template>
  <button
    :class="'dl-button' + (classList ? ' ' + classList : '')"
    :disabled="disabled"
    :style="{ width: bwidth, height: bheight }"
  >
    <slot></slot>
  </button>
</template>
<script src="./dl-button.js"></script>
