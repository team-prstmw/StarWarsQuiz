import createHTML from './saberTimeStruct';

class Time {
  constructor() {
    this.limitTime = null;
    this.currentTime = 0;
    this.remainingTime = null;
    this.clock = null;
  }

  displayTime(string) {
    const $timeLeft = document.querySelector('.time');
    $timeLeft.textContent = string;
  }

  start(numberTime) {
    this.limitTime = Time.parseSeconds(numberTime);
    this.displayTime(this.calcRemainingTime());
    this.clock = setInterval(() => {
      this.currentTime += 1000;
      this.displayTime(this.calcRemainingTime());
      if (this.isStopped()) {
        this.stop();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.clock);
  }

  isStopped() {
    return this.currentTime === this.limitTime;
  }

  calcRemainingTime() {
    this.remainingTime = this.limitTime - this.currentTime;
    this.loadingBar();
    return Time.reParseTime(this.remainingTime);
  }

  static parseSeconds(time) {
    const [min, sec] = time.split(':').map(Number);
    return min * 60 * 1000 + sec * 1000;
  }

  static reParseTime(mili) {
    let min = Math.floor(mili / 1000 / 60);
    let sec = Math.floor((mili / 1000) % 60);
    min = String(min).padStart(2, '0');
    sec = String(sec).padStart(2, '0');
    return `${min}:${sec}`;
  }

  loadingBar() {
    const $bar = document.querySelector('.saber');
    const leftPercent = Time.countPercent(this.limitTime, this.remainingTime);
    $bar.style.width = `${leftPercent}%`;
  }

  static countPercent(firstLicz, miliSec) {
    let pom = null;
    pom = Math.round((miliSec * 100) / firstLicz);
    return pom;
  }

  setTime() {
    const clock = new Time();
    createHTML();
    clock.start('01:00');
  }
}

const test = new Time();
test.setTime();

// export default Time;
