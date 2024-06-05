// alert('ATENÇÃO! Somos abertos a feedbacks honestos dos nossos projetos, somos estudantes de Engenharia de Software, aptos a bons conselhos');

ourStore = document.querySelector(".our-store");
pages = document.querySelector(".pages");
blog = document.querySelector(".blog");
login = document.querySelector(".login")

ourStore.addEventListener('click', () => {
    alert('Em construção');
})

pages.addEventListener('click', () => {
    alert('Em construção');
})

blog.addEventListener('click', () => {
    alert('Em construção');
})

login.addEventListener('click', () => {
    usuario = prompt('Digite seu login');
    senha = prompt('Agora digite sua senha');

    if (usuario == "admin" && senha == "admin") {
        alert('Login com sucesso!')
    } else {
        alert('Usuario ou senha incorretos')
    }
})