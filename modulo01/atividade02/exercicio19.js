const prompt = require('prompt-sync')()

function validateTime(hour, minute, second) {
  return (
    hour >= 0 && hour <= 23 &&
    minute >= 0 && minute <= 59 &&
    second >= 0 && second <= 59
  )
}

function formatTime(hour, minute, second) {
    return (hour.toString().padStart(2, '0') + ":" + minute.toString().padStart(2, '0') + ":" + second.toString().padStart(2, '0'))
  }
function readTime() {
  let times = []

  for (let i = 0; i < 5; i++) {
    let valid = false
    let hour, minute, second

    while (!valid) {
      const entry = prompt("Digite o "+ (i + 1) + "º horário (HH:MM:SS): ")
      const parts = entry.split(':')
      hour = parseInt(parts[0])
      minute = parseInt(parts[1])
      second = parseInt(parts[2])

      if (validateTime(hour, minute, second)) {
        valid = true
      } else {
        console.log("Horário inválido. Por favor, insira um horário no formato HH:MM:SS.")
      }
    }

    times.push(formatTime(hour, minute, second))
  }

    console.log("Horários lidos:")
    for (i = 0 ; i < 5 ;  ++i) {
        console.log("Horário " + i + ": "+ times[i])
    }
}

readTime()
