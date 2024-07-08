document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();

    if (result.success) {
        alert('Cadastro bem-sucedido! Você pode fazer login agora.');
        window.location.href = '/login.html';
    } else {
        alert('Erro ao criar conta. Tente novamente.');
    }
});
