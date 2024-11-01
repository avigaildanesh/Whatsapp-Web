

export async function getChats() {
    const token = localStorage.getItem('token');
    const apiUrl = `http://localhost:5000/api/Chats`;
    try {

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
        const chats = await res.json();
        return chats;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}


export async function createChat({contactName}) {
    
    const token = localStorage.getItem('token');
    const apiUrl = `http://localhost:5000/api/Chats`;
    try {
        const newContact = {
            contactName: contactName
        }
        const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token,
            },
            body: JSON.stringify(newContact)
        });
        if (!res.ok) {
            throw new Error('Request failed');
        }
        const contact = await res.json();
        return contact;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}


export async function getMessages ({id})
{
    const token = localStorage.getItem('token');
    const apiUrl = `http://localhost:5000/api/Chats/${id}/Messages`;
    try {

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
        const messages = await res.json();
        return messages;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}


export async function sendMessage({ message, id }) {
    const token = localStorage.getItem('token');
    const apiUrl = `http://localhost:5000/api/Chats/${id}/Messages`;
    const data = {
        msg : message
    }
    try {
        const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token,
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error('Request failed');
        }
        const message = await res.json();
        return message;

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function deleteChat({id}) {

    const token = localStorage.getItem('token');
    const apiUrl = `http://localhost:5000/api/Chats/${id}`;
    const res = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token,
        },
    });

    if (!res.ok) {
        throw new Error(`Failed to delete chat. Status: ${res.status}`);
    }
}
