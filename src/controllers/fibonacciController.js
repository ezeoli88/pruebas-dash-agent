// fibonacciController.js

/**
 * Returns the first 50 Fibonacci numbers.
 * @param {Request} req
 * @param {Response} res
 */
exports.getFirst50 = (req, res) => {
  const fibonacci = [0, 1];

  for (let i = 2; i < 50; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  res.json({ data: fibonacci });
};
