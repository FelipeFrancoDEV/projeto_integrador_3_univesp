const SESSION_NAME = 'med_sessao_ativa';
let tipoUsuarioSelecionado = '';

function configurarLogin(tipo) {
    tipoUsuarioSelecionado = tipo;
    const escolha = document.getElementById('escolha-inicial');
    const form = document.getElementById('form-login');
    const titulo = document.getElementById('titulo-login');

    if (escolha && form) {
        escolha.style.display = 'none';
        form.style.display = 'block';
        titulo.innerText = tipo === 'medico' ? 'Login Médico' : 'Login Paciente';
    }
}

function fazerLoginNovo() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === 'teste@teste' && senha === '123') {
        const user = { 
            nome: tipoUsuarioSelecionado === 'medico' ? "Dra. Ana Pires" : "Paciente de Teste", 
            tipo: tipoUsuarioSelecionado 
        };
        localStorage.setItem(SESSION_NAME, JSON.stringify(user));

        // REDIRECIONAMENTO COM NOMES NOVOS
        if (tipoUsuarioSelecionado === 'medico') {
            window.location.href = "paineldomedico.html";
        } else {
            window.location.href = "paineldopaciente.html";
        }
    } else {
        alert("Use teste@teste e 123");
    }
}

function logout() {
    localStorage.removeItem(SESSION_NAME); 
    window.location.href = "portaldeacesso.html"; // Volta para o portal
}

function verificarSessao() {
    const user = JSON.parse(localStorage.getItem(SESSION_NAME));
    if (!user) {
        window.location.href = "portaldeacesso.html";
    }
}