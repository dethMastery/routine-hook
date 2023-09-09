const date = new Date()

function day(no) {
  const days = ['Sun.', 'Mon.', 'Tue,', 'Wed.', 'Thu.', 'Fri.', 'Sat.']

  return days[no]
}

function month(no) {
  const months = [
    'January',
    'February',
    'March',
    'April.',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return months[no]
}

const dateLine = `${day(date.getDay())} ${date.getDate()} ${month(
  date.getMonth()
)} ${date.getFullYear()}`

module.exports = dateLine
