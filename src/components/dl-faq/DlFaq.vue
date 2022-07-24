<!-- <template>
  <section class="dl-faq">
    <p class="dl-faq__header">FAQ</p>
    <div class="dl-questions">
      <div class="dl-question"></div>
    </div>
  </section>
</template> -->

<template>
  <section class="dl-faq">
    <p class="dl-faq__header">FAQ</p>
    <div class="dl-questions">
      <div v-for="(question, key) in questions" :key="key" class="dl-question">
        <button
          @click="toggleAccordion(key)"
          class="flex items-center space-x-3 dl-question__text"
          :aria-expanded="isOpen"
          :aria-controls="`collapse${key}`"
        >
          {{ question.question }}
          <svg
            class="dl-question__svg"
            :class="{
              'dl-question__svg--rotate': isOpen === key,
              '': isOpen === null,
            }"
            width="29"
            height="18"
            viewBox="0 0 29 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 16.1419L27.1421 1.99976"
              stroke="#FF8B00"
              stroke-width="3"
            />
            <line
              x1="1.06066"
              y1="1.93934"
              x2="15.2028"
              y2="16.0815"
              stroke="#FF8B00"
              stroke-width="3"
            />
          </svg>
        </button>
        <Transition name="answer">
          <div
            :id="`collapse${key}`"
            v-if="isOpen === key"
            class="dl-question__answer"
          >
            {{ question.answer }}
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script src="./dl-faq.js"></script>
