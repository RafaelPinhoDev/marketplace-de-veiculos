'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        const perfil = document.getElementById('perfil').value;

        if (perfil === 'cliente') {
            window.location.href = 'pageClient.html';
        } else if (perfil === 'admin') {
            window.location.href = 'pageAdmin.html';
        } else {
            alert('Por favor, selecione um perfil válido.');
        }
    });
});


document.getElementById('cadastroForm').addEventListener('submit', (e) => {
    e.preventDefault();
            // Aqui você pode adicionar lógica de salvamento futuramente
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html';
});