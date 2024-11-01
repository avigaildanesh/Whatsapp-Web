export async function createJwtToken(username, password) {
  const apiUrl = 'http://localhost:5000/api/Tokens';

  const postData = {
    username: username,
    password: password
  };
  try {

    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });

    if (!res.ok) {
      throw new Error('Request failed');
    }

    const token = await res.text();
    localStorage.setItem('token', token);
    
    
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
