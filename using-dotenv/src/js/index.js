'use strict'

const span = document.querySelector('span')
span.textContent = process.env.API_ENDPOINT || 'not loaded'