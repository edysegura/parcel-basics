import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

const input = document.querySelector('input')
const output = document.querySelector('output')
const oneSecond = 1000

const $input = Observable
  .fromEvent(input, 'keyup')
  .map(event => event.currentTarget.value)
  .debounceTime(oneSecond)

$input.subscribe(text => output.textContent = text)