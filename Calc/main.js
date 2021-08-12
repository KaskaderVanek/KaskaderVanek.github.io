// Доходы
const incomeSalary = document.querySelector('#income-salary')
const incomeFreelance = document.querySelector('#income-freelance')
const incomeExtra1 = document.querySelector('#income-extra-1')
const incomeExtra2 = document.querySelector('#income-extra-2')

// Расходы
const costsFlat = document.querySelector('#costs-flat')
const costsHouse = document.querySelector('#costs-house-services')
const costsTransport = document.querySelector('#costs-transport')
const costsCredit = document.querySelector('#costs-credit')

// Доступно
const totalMonthInput = document.querySelector('#total-month')
const totalDayInput = document.querySelector('#total-day')
const totalYearInput = document.querySelector('#total-year')

// Копилка
const moneyBox = document.querySelector('#money-box-range')
const accumulationInput = document.querySelector('#accumulation')
const spend = document.querySelector('#spend')

let totalMonth, totalDay, totalYear
let accumulation, totalPrecents

const inputs = document.querySelectorAll('.input')
for (input of inputs) {
  input.addEventListener('input', (e) => {
    if (e.target.type != 'text') {
      moneyBox.disabled = false
      countingTotalMoney()
      countingBoxingMoney()
    }
  })
}

countingTotalMoney = () => {
  totalMonth =
    Number(incomeSalary.value) +
    Number(incomeFreelance.value) +
    Number(incomeExtra1.value) +
    Number(incomeExtra2.value) -
    (Number(costsFlat.value) +
      Number(costsHouse.value) +
      Number(costsTransport.value) +
      Number(costsCredit.value))
  totalMonthInput.value = totalMonth
}

moneyBox.addEventListener('input', () => {
  totalPrecents = Number(moneyBox.value)
  document.querySelector('#total-precents').innerHTML = totalPrecents
  countingBoxingMoney()
})

countingBoxingMoney = () => {
  if (totalPrecents > 0) {
    accumulation = Math.trunc((totalMonth * totalPrecents) / 100)
    accumulationInput.value = accumulation
    spend.value = Math.trunc(totalMonth - accumulation)
    totalYear = accumulation * 12
    totalDay = Math.trunc(Number(spend.value) / 30)
    totalDayInput.value = totalDay
    totalYearInput.value = totalYear
  } else {
    countingTotalMoney()
    totalDay = Math.trunc(totalMonth / 30)
    totalDayInput.value = totalDay
    spend.value = totalMonth
    accumulationInput.value = 0
  }
}
