const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const getFirstTenUsers = async (req, res) => {
  try {
    const response = await fetch(USERS_URL);

    if (!response.ok) {
      return res.status(502).json({ error: 'Error al obtener usuarios' });
    }

    const users = await response.json();
    const firstTenUsers = Array.isArray(users) ? users.slice(0, 10) : [];

    return res.json(firstTenUsers);
  } catch (error) {
    return res.status(502).json({ error: 'Error al obtener usuarios' });
  }
};

export { getFirstTenUsers };