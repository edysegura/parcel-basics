import Rx from 'rxjs/Rx'

const input = document.querySelector('input')
const output = document.querySelector('output')
const oneSecond = 1000

const $input = Rx.Observable
  .fromEvent(input, 'keyup')
  .map(event => event.currentTarget.value)
  .debounceTime(oneSecond)

$input.subscribe(text => output.textContent = text)