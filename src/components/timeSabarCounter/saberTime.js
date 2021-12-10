import createHTML from './htmlStruct.js';

const ONE_MIN = 60;
const ONE_SEC = 1000;

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
      this.currentTime += ONE_SEC;
      this.displayTime(this.calcRemainingTime());
      if (this.isStopped()) {
        this.stop();
      }
    }, ONE_SEC);
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
    return min * ONE_MIN * ONE_SEC + sec * ONE_SEC;
  }

  static reParseTime(mili) {
    let min = Math.floor(mili / ONE_SEC / ONE_MIN);
    let sec = Math.floor((mili / ONE_SEC) % ONE_MIN);
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
}

function setTime() {
  const clock = new Time();
  createHTML();
  clock.start('01:00');
}

window.addEventListener('DOMContentLoaded', setTime());

// export default Time;
