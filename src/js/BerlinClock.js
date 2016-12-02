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

  },

  updateMinutes: function (minute) {

  },

  updateClock: function (hour, minute, second) {
    this.reset()
    this.updateSeconds(second)
  },

  reset: function () {
    $('.ticker').not('.secondsCircle').removeClass('yellow red')
  }
}

$(function () {
  BerlinClock.tick()
  setInterval(BerlinClock.tick.bind(BerlinClock), 1000)
})
