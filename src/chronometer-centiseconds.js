class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      if (printTimeCallback) printTimeCallback()
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60)
  }

  getCentiseconds() {
    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    let string = value.toString()
    if (string.length === 1) { string = "0" + string }
    return string
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}
