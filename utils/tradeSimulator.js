const fs = require('fs')
const CircularBuffer = require('./circularBuffer')

const shortSMA = new CircularBuffer(5)
const longSMA = new CircularBuffer(20)

function checkTradeSignal(price) {
  shortSMA.add(price)
  longSMA.add(price)

  const shortAvg = shortSMA.getAverage()
  const longAvg = longSMA.getAverage()

  if (shortAvg > longAvg) return 'BUY'
  if (shortAvg < longAvg) return 'SELL'
  return 'HOLD'
}

function logTrade(type, price) {
  const timestamp = new Date().toISOString()
  const logEntry = `${timestamp} - ${type} @ ${price}\n`

  fs.appendFileSync('./logs/trades.log', logEntry)
  console.log(logEntry)
}

module.exports = { checkTradeSignal, logTrade }
