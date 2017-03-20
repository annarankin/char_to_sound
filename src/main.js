import Key from 'key'
import { NOTES, order } from 'helpers'
import $ from 'jquery'

const row1 = order.slice(0, 14)
const row2 = order.slice(14, 28)
const row3 = order.slice(28, 41)
const row4 = order.slice(41, 52)
const row5 = order.slice(52, 59)

const context = new AudioContext()
const rows = [ row1, row2, row3, row4, row5 ]
const $keyboard = $('<div class="keyboard">')

rows.forEach((row) => createRow(row))

$(document.body).append($keyboard)

function createRow(keyCodes) {
  const $row = $('<div class="row"></div>')
  $($keyboard).append($row)

  const keys = keyCodes.map((keyCode) => {
    const key = new Key(keyCode, NOTES[keyCode], context, $row)
    key.render()
  })
}
