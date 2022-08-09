<template>
  <div class="dl-auth-before">
    <svg
      class="dl-auth-before__key"
      width="51"
      height="40"
      viewBox="0 0 51 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1955_7598)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M35.1041 13.3857C35.9994 13.051 36.9994 13.5078 37.3333 14.4037C37.6676 15.2994 37.2109 16.2993 36.317 16.629L35.674 16.8723L36.6802 19.5713C36.8529 20.0331 36.6209 20.5409 36.1587 20.7133L32.1362 22.2135C31.6745 22.3862 31.1665 22.1542 30.9942 21.692L29.9877 18.9934L25.1761 20.7846C25.2185 21.6574 25.0569 22.5564 24.669 23.4056C23.3683 26.2539 20.0055 27.5084 17.157 26.2075C14.3088 24.9067 13.0544 21.5436 14.3552 18.6953C15.656 15.8469 19.0191 14.5928 21.8673 15.8935C22.7165 16.2814 23.4273 16.8551 23.9669 17.5425L35.1041 13.3857ZM20.418 19.067C19.3232 18.567 18.0286 19.0498 17.5286 20.1446C17.0286 21.2395 17.5115 22.5338 18.6064 23.0338C19.7012 23.5338 20.9955 23.0511 21.4956 21.9563C21.9955 20.8616 21.5128 19.567 20.418 19.067Z"
          fill="#FF8B00"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1955_7598"
          x="0.841396"
          y="0.276001"
          width="49.6014"
          height="39.4453"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1955_7598"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1955_7598"
            result="shape"
          />
        </filter>
      </defs>
    </svg>

    вход через:
    <div class="dl-auth-before__buttons">
      <a
        @click="login"
        class="dl-auth-before__button dl-auth-before__button--vk"
      >
        <img src="../../../assets/img/dl-auth/vk.png" alt="" width="29" />
      </a>
      <a
        @click="login"
        class="dl-auth-before__button dl-auth-before__button--steam"
      >
        <img src="../../../assets/img/dl-auth/steam.png" alt="" width="29" />
      </a>
    </div>
  </div>
</template>
<script src="./dl-auth-before.js"></script>
