export default {
  name: 'DlRaffle',
  props: ['raffle', 'key'],
  data() {
    return {
      modeRuffles: '',
      deadline: Date,
      timer: null,
      dataTimer: {
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
      },
      nowDay: new Date(),
    };
  },

  methods: {
    getMode() {
      switch (this.raffle.iterationMode) {
        case 'everyday':
          this.modeRuffles = 'ежедневный ';
          break;
        case 'everyweek':
          this.modeRuffles = 'еженедельный ';
          break;
        case 'everymonth':
          this.modeRuffles = 'ежемесячный ';
          break;
        default:
          this.modeRuffles = 'ежедневный ';
      }
    },
    startOfNextMonth() {
      const now = new Date();
      return new Date(now.getFullYear(), now.getMonth() + 1);
    },
    startOfNextWeek() {
      const now = new Date();
      let diff = now.getDay() === 0 ? 1 : 8 - now.getDay();
      return new Date(now.getFullYear(), now.getMonth(), now.getDate() + diff);
    },
    startOfTomorrow() {
      let t = new Date(Date.now() + 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0);
      return t;
    },
    getDeadline() {
      const now = new Date();
      switch (this.raffle.iterationMode) {
        case 'everyday':
          this.deadline = this.startOfTomorrow();
          break;
        case 'everyweek':
          this.deadline = this.startOfNextWeek();
          break;
        case 'everymonth':
          now.getMonth();

          this.deadline = this.startOfNextMonth();
          break;
        default:
          this.deadline = this.nowDay;
      }
    },
    countdownTimer() {
      const diff = this.deadline - new Date();
      if (diff <= 0) {
        clearInterval(this.timer);
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
    startTimer() {
      this.countdownTimer();
      this.timer = setInterval(this.countdownTimer, 1000);
    },

    stopTimer() {
      clearTimeout(this.timer);
    },
  },

  mounted() {
    this.getMode();
    this.getDeadline();
    this.startTimer();
  },
  destroyed() {
    this.stopTimer();
  },
};
