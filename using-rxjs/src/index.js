import { fromEvent } from 'rxjs'
import { map, debounceTime } from 'rxjs/operators'

const input = document.querySelector('input')
const output = document.querySelector('output')
const oneSecond = 1000

const observer$ = fromEvent(input, 'input')
  .pipe(
    map(event => event.target.value),
    debounceTime(oneSecond)
  )

const showValue = text => output.textContent = text
observer$.subscribe(showValue)
