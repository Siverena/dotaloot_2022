export default {
  name: 'DlCaseItem',
  props: ['item', 'page'],
  data() {
    return {
      status: '', //{'' displayActions || checkingAvailability || waitingForSeller || changeReady }
      deadline: null,
      timer: null,
      dataTimer: {
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
      },
    };
  },
  methods: {
    /**
     * Проверка доступности
     */
    async checkAvailability() {
      this.status = 'checkingAvailability';
      setTimeout(() => {
        this.waitForSeller();
      }, 10 * 1000);
    },
    /**
     * Ожидание продавца
     * @param {Number} min - количество минут
     */
    waitForSeller(min = 1) {
      this.status = 'waitingForSeller';
      this.deadline = new Date(Date.now() + min * 10 * 1000);
      this.startTimer(this.waitForChange);
    },
    /**
     * Ожидание обмена
     * @param {Number} min - количество минут
     */
    waitForChange(min = 1) {
      this.status = 'changeReady';
      this.deadline = new Date(Date.now() + min * 10 * 1000);
      this.startTimer();
    },
    /**
     * Таймер
     * @param {Function} finFunc - функция, запускаемая после истечения таймера
     */
    countdownTimer(finFunc) {
      const diff = this.deadline - new Date();
      if (diff <= 0) {
        this.stopTimer();
        finFunc();
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      this.dataTimer.days = days < 10 ? '0' + days : days;
      this.dataTimer.hours = hours < 10 ? '0' + hours : hours;
      this.dataTimer.minutes = minutes < 10 ? '0' + minutes : minutes;
      this.dataTimer.seconds = seconds < 10 ? '0' + seconds : seconds;
    },
    startTimer(finFunc = () => {}) {
      this.timer = setInterval(this.countdownTimer, 200, finFunc);
    },
    stopTimer() {
      clearTimeout(this.timer);
      // this.timer = null;
    },
    takeItem() {
      if (this.status === 'changeReady') this.status = '';
      this.stopTimer();
    },
  },
};
