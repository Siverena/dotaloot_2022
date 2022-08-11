export default {
  name: 'DlCaseItem',
  props: ['item'],
  data() {
    return {
      status: '', //{'' || checkingAvailability || waitingForSeller || changeReady }
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
    async checkAvailability() {
      try {
        this.status = 'checkingAvailability';
        setTimeout(() => {
          this.status = 'waitingForSeller';
        }, 2 * 60 * 1000);
        // const response = await Axios.post('https://api');
        // if (response.status !== 200) {
        //   return;
        // }
      } catch (e) {
        console.log(e);
      }
    },
    waitForSeller() {
      this.deadline = new Date(Date.now() + 5 * 60 * 1000);
      this.startTimer();
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
      clearInterval(this.timer);
    },
    handleClick() {
      if (this.status === '') this.waitForSeller();
      else this.stopTimer();
    },
  },
};
