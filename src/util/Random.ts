class Random {
  getNumberInRange(min: number, max: number): number {
    return Math.random() * (max - min + 1) + min | 0;
  }
}

export default new Random();