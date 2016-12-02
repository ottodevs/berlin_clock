/* global $ */
// The line above makes my linter happy

var BerlinClock = {
  tick: function () {
    var time = new Date()
    var second = time.getSeconds()
    var minute = time.getMinutes()
    var hour = time.getHours()

    this.updateClock(hour, minute, second)
  },
  updateSeconds: function (second) {
    $('#seconds>div').toggleClass('yellow')
  },
  updateHours: function (hour) {
    if (hour > 5) {
      $(`#hoursOfFive > div:nth-child(${Math.floor(hour / 5)})`).addClass('red')
      this.updateHours(hour - 5)
    } else if (hour > 0) {
      $(`#hoursOfOne > div:nth-child(${hour})`).addClass('red')
      this.updateHours(hour - 1)
    } else {
      return
    }
  },

  updateMinutes: function (minute) {
    if (minute > 5) {
      $(`#minutesOfFive > div:nth-child(${Math.floor(minute / 5)})`).addClass('yellow')
      this.updateMinutes(minute - 5)
    } else if (minute > 0) {
      $(`#minutesOfOne > div:nth-child(${minute})`).addClass('yellow')
      this.updateMinutes(minute - 1)
    } else {
      return
    }
  },

  updateClock: function (hour, minute, second) {
    this.reset()
    this.updateSeconds(second)
    this.updateMinutes(minute)
    this.updateHours(hour)
  },

  reset: function () {
    $('.ticker').not('.secondsCircle').removeClass('yellow red')
  }
}

$(function () {
  BerlinClock.tick()
  setInterval(BerlinClock.tick.bind(BerlinClock), 1000)
})
