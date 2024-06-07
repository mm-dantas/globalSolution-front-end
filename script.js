// alert('ATENÇÃO! Somos abertos a feedbacks honestos dos nossos projetos, somos estudantes de Engenharia de Software, aptos a bons conselhos');

ourStore = document.querySelector(".our-store");
pages = document.querySelector(".pages");
blog = document.querySelector(".blog");
login = document.querySelector(".login");
postImage1 = document.querySelector("#post-image1");
postImage2 = document.querySelector("#post-image2");

ourStore.addEventListener('click', () => {
    alert('Em construção');
});

pages.addEventListener('click', () => {
    alert('Em construção');
});

blog.addEventListener('click', () => {
    alert('Em construção');
});

login.addEventListener('click', () => {
    usuario = prompt('Digite seu login');
    senha = prompt('Agora digite sua senha');

    if (usuario == "admin" && senha == "admin") {
        alert('Login com sucesso! Bem vindo!');
        login.textContent = "Usuário: admin";
    } else {
        alert('Usuario ou senha incorretos');
    }
})

const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselContainer.children.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselContainer.children.length) % carouselContainer.children.length;
  updateCarousel();
});

function updateCarousel() {
  const slideWidth = carouselContainer.children[0].clientWidth;
  carouselContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
}
