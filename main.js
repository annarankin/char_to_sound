(function () {
  var h1Tag = document.querySelector('.key')
  var context = new AudioContext()

  function displayChar(event) {
    h1Tag.innerText = event.key
    var beep = new Beep(context, NOTES[event.keyCode])
    beep.play()
    h1Tag.classList.add('active')
  }

  function hideChar() {
    h1Tag.classList.remove('active')
  }

  window.addEventListener('keydown', displayChar)
  window.addEventListener('keyup', hideChar)
})()

class Beep {
  constructor(context, frequency) {
    this.context = context
    this.frequency = frequency
    this.generateOscillator()
  }

  generateOscillator() {
    var o = this.context.createOscillator()
    var g = this.context.createGain()
    o.frequency.value = this.frequency
    o.connect(g)
    g.connect(this.context.destination)
    this.oscillator = o
    this.gain = g
  }

  play() {
    this.generateOscillator()
    this.start()
    this.stop()
  }

  start() {
    this.oscillator.start()
  }

  stop() {
    this.gain.gain.exponentialRampToValueAtTime(
      0.00001, this.context.currentTime + 1
    )
  }
}

var NOTES = {
  192: 293.665,
  49: 311.127,
  50: 329.628,
  51: 349.228,
  52: 369.994,
  53: 391.995,
  54: 415.305,
  55: 440,
  56: 466.164,
  57: 493.883,
  48: 523.251,
  189: 554.365,
  187: 587.33,
  8: 622.254,
  9: 659.255,
  81: 698.456,
  87: 739.989,
  69: 783.991,
  82: 830.609,
  84: 880,
  89: 932.328,
  85: 987.767,
  73: 1046.502,
  79: 1108.731,
  80: 1174.659,
  219: 1244.508,
  221: 1318.51,
  220: 1396.913,
  20: 1479.978,
  65: 1567.982,
  83: 1661.219,
  68: 1760,
  70: 1864.655,
  71: 1975.533,
  72: 2093.005,
  74: 2217.461,
  75: 2349.318,
  76: 2489.016,
  186: 2637.021,
  222: 2793.826,
  13: 2959.955,
  16: 3135.964,
  90: 3322.438,
  88: 3520,
  67: 3729.31,
  86: 3951.066,
  66: 4186.009,
  78: 4434.922,
  77: 4698.636,
  188: 4978.032,
  190: 5274.042,
  191: 5587.652,
  17: 5919.91,
  18: 6271.928,
  91: 6644.876,
  32: 7040,
  93: 7458.62,
  18: 7902.132
}
