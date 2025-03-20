class CircularBuffer {
  constructor(size) {
    this.size = size
    this.buffer = []
  }

  add(price) {
    if (this.buffer.length >= this.size) {
      this.buffer.shift()
    }
    this.buffer.push(price)
  }

  getAverage() {
    if (this.buffer.length === 0) return 0
    return (
      this.buffer.reduce((sum, price) => sum + price, 0) / this.buffer.length
    )
  }
}

module.exports = CircularBuffer
