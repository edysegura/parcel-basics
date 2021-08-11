'use strict'

const span = document.querySelector('span')
span.textContent = process.env.API_ENDPOINT || 'not loaded'

const textarea = document.querySelector('textarea')
textarea.value = process.env.PATH.replace(/;|:/g, '\n')