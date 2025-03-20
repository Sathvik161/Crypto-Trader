const fetchPrice = require('./utils/fetchPrice')
const { checkTradeSignal, logTrade } = require('./utils/tradeSimulator')
const { POLL_INTERVAL } = require('./config')

async function runTrader() {
  const price = await fetchPrice()
  if (price) {
    const signal = checkTradeSignal(price)
    if (signal !== 'HOLD') logTrade(signal, price)
  }
}

setInterval(runTrader, POLL_INTERVAL)
console.log('Crypto Trading Bot Started...')
