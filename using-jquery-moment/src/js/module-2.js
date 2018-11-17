'use strict'

import { groupBy } from 'lodash/collection'
import people from './people'

const managerGroups = groupBy(people, 'manager')
const output = document.querySelector('code')
const jsonText = JSON.stringify(managerGroups, null, 2)

output.textContent = jsonText
