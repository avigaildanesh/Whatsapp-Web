export async function getUser() {
  const username = localStorage.getItem('username');
  const apiUrl = `http://localhost:5000/api/Users/${username}`;

  try {
    const token = localStorage.getItem('token');
    const res = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + token,
      }
    });
    if (!res.ok) {
      throw new Error('Request failed');
    }
    const user = await res.json();
    return user;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
