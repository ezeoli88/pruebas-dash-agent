/**
 * Returns the first 10 users from JSONPlaceholder API.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function getFirst10(req, res) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=10');
    const users = await response.json();
    res.json({ data: users });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
}
