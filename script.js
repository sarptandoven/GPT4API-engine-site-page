const form = document.getElementById('chat-form');
const mytextInput = document.getElementById('mytext');
const responseTextarea = document.getElementById('response');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const mytext = mytextInput.value.trim();

    if (!mytext) {
        return;
    }

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: mytext }),
        });

        if (!response.ok) {
            throw new Error(`request failed with status ${response.status}`);
        }

        const data = await response.json();
        responseTextarea.value = data.message || 'No response returned.';
    } catch (error) {
        responseTextarea.value = 'Error: configure a server-side /api/chat endpoint that keeps the OpenAI API key off the client.';
    }
});
