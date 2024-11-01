
export async function createChat({contactName}) {
    const token = localStorage.getItem('token');
    const apiUrl = `http://localhost:5000/api/Chats`;
    try {
        const newChat = {users: [contactName]};
        const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(newChat)
        });
        if (!res.ok) {
            throw new Error('Request failed');
        }
        const chat = await res.json();
        return chat;
    }
     catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
