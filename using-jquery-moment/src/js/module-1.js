import moment from 'moment'
import $ from 'jquery'

const showDateTime = () => {
  const rightNow = moment().format('YYYY/MM/DD, h:mm:ss a')
  $('p:first').html(rightNow)
}

showDateTime()
setInterval(showDateTime, 1000)
