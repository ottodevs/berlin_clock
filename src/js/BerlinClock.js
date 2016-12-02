var BerlinClock = {
  tick: function () {
    var time = new Date(),
      second = time.getSeconds()
    minute = time.getMinutes()
    hour = time.getHours()
  },
  updateSeconds: function (second) {

  },
  updateHours: function (hour) {

  },

  updateMinutes: function (minute) {

  },

  updateClock: function (hour, minute, second) {

  },

  reset: function () {

  }
}

$(function () {
  BerlinClock.tick()
  setInterval(BerlinClock.tick.bind(BerlinClock), 1000)
}()
)
