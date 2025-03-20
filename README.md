# Crypto Trading Simulation Bot

## Overview

This application fetches live **Bitcoin** price data, calculates **Simple Moving Averages (SMA)**, and simulates buy/sell trades based on SMA crossovers. It logs all trade signals for analysis.

---

## Features

- **Real-time price fetching** from the CoinGecko API.
- **SMA-based trading signals** using a short-term (5 prices) and long-term (20 prices) moving average.
- **Circular buffer implementation** for efficient price storage.
- **Automated trade execution & logging** when SMA crossovers occur.

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/yourusername/crypto-trader.git
cd crypto-trader
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Configure the Application

Modify `config.js` to adjust settings like polling interval:

```js
module.exports = {
  API_URL:
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd',
  POLL_INTERVAL: 60000, // 1 minute interval
}
```

---

## ▶️ How to Run the Application

### 1️⃣ Start the Bot

```sh
node index.js
```

You should see:

```
Crypto Trading Bot Started...
```

### 2️⃣ Check Trade Logs

The bot logs trades when SMA conditions are met. View logs using:

```sh
cat logs/trades.log
```

Example output:

```
2025-03-20T10:15:00.000Z - BUY @ 64250
2025-03-20T10:16:00.000Z - SELL @ 64000
```

### 3️⃣ Stop the Bot

Press `CTRL + C` in the terminal.

---

## How the Trading Strategy Works

### 🔹 SMA Calculation

- **Short SMA (5 prices):** Recent 5 prices averaged.
- **Long SMA (20 prices):** Recent 20 prices averaged.

### 🔹 Trade Signals

| Signal   | Condition                                  |
| -------- | ------------------------------------------ |
| **BUY**  | When Short SMA **crosses above** Long SMA. |
| **SELL** | When Short SMA **crosses below** Long SMA. |
| HOLD     | No crossover detected.                     |

---

## Design Decisions

### 1️⃣ **Circular Buffer for Efficient SMA Calculation**

- Instead of storing all price history, we use a **circular buffer** to keep only the last 5 and 20 prices, ensuring constant-time SMA updates.

### 2️⃣ **Real-Time Price Fetching**

- The bot fetches **live prices** from CoinGecko every minute (configurable in `config.js`).

### 3️⃣ **Trade Logging System**

- Trades are **logged persistently** in `logs/trades.log`, allowing for analysis and backtesting.

---

## Running Tests

We use **Jest** for testing. To run tests:

```sh
npx jest
```

Example test file: `tests/testCircularBuffer.js`

```js
const CircularBuffer = require('../utils/circularBuffer')

test('CircularBuffer maintains correct size', () => {
  const buffer = new CircularBuffer(3)
  buffer.add(10)
  buffer.add(20)
  buffer.add(30)
  buffer.add(40)

  expect(buffer.buffer.length).toBe(3)
  expect(buffer.getAverage()).toBe((20 + 30 + 40) / 3)
})
```

---

## Future Enhancements

- **Multiple Cryptocurrency Support** (e.g., Ethereum, Dogecoin).
- **Database Logging** instead of a text file.
- **Web Dashboard** for visualizing trades.

---

## License

MIT License.

---

## Author

Developed by **Sathvik**. Contributions welcome!

📧 Contact: sathvik.vittapu@gmail.com
