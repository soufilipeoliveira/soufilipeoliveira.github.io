// const body = document.querySelector('body'),
//       sidebar = body.querySelector('nav'),
//       toggle = body.querySelector(".toggle"),
//       searchBtn = body.querySelector(".search-box"),
//       modeSwitch = body.querySelector(".toggle-switch"),
//       modeText = body.querySelector(".mode-text");


// toggle.addEventListener("click" , () =>{
//     sidebar.classList.toggle("close");
// })

// searchBtn.addEventListener("click" , () =>{
//     sidebar.classList.remove("close");
// })

// modeSwitch.addEventListener("click" , () =>{
//     body.classList.toggle("dark");
    
//     if(body.classList.contains("dark")){
//         modeText.innerText = "Light mode";
//     }else{
//         modeText.innerText = "Dark mode";
        
//     }
// });

// const body = document.querySelector('body'),
//       sidebar = body.querySelector('nav'),
//       toggle = body.querySelector(".toggle"),
//       searchBtn = body.querySelector(".search-box"),
//       modeSwitch = body.querySelector(".toggle-switch"),
//       modeText = body.querySelector(".mode-text"),
//       logo = body.querySelector('.image img'); // Select the logo image

// toggle.addEventListener("click" , () =>{
//     sidebar.classList.toggle("close");
// })

// searchBtn.addEventListener("click" , () =>{
//     sidebar.classList.remove("close");
// })

// modeSwitch.addEventListener("click" , () =>{
//     body.classList.toggle("dark");
    
//     if(body.classList.contains("dark")){
//         modeText.innerText = "Light mode";
//         logo.src = "logo_.png"; // Change to dark mode logo
//     } else {
//         modeText.innerText = "Dark mode";
//         logo.src = "logo.png"; // Change to light mode logo
//     }
// });


// const body = document.querySelector('body'),
//       sidebar = body.querySelector('nav'),
//       toggle = body.querySelector(".toggle"),
//       searchBtn = body.querySelector(".search-box"),
//       modeSwitch = body.querySelector(".toggle-switch"),
//       modeText = body.querySelector(".mode-text"),
//       logo = body.querySelector('.image img'), // Select the sidebar logo image
//       logoAvi = document.getElementById('logoavi'); // Select the image with id="logoavi"

// toggle.addEventListener("click" , () =>{
//     sidebar.classList.toggle("close");
// })

// searchBtn.addEventListener("click" , () =>{
//     sidebar.classList.remove("close");
// })

// modeSwitch.addEventListener("click" , () =>{
//     body.classList.toggle("dark");
    
//     if(body.classList.contains("dark")){
//         modeText.innerText = "Light mode";
//         logo.src = "logo_.png"; // Change to dark mode logo
//         logoAvi.src = "aviat_.png"; // Change to dark mode for logoavi
//     } else {
//         modeText.innerText = "Dark mode";
//         logo.src = "logo.png"; // Change to light mode logo
//         logoAvi.src = "aviat.png"; // Change back to light mode for logoavi
//     }
// });

const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text"),
    logo = body.querySelector('.image img'),
    logoAvi = document.getElementById('logoavi');

// Verificar e aplicar o tema salvo
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
    if (savedTheme === "dark") {
        modeText.innerText = "Light mode";
        logo.src = "logo_.png";
        logoAvi.src = "aviat_.png";
    } else {
        modeText.innerText = "Dark mode";
        logo.src = "logo.png";
        logoAvi.src = "aviat.png";
    }
}

// Verificar e aplicar o estado do sidebar salvo
const isMobile = window.innerWidth <= 768;
const savedSidebarState = localStorage.getItem("sidebar");

if (isMobile) {
    // Em dispositivos móveis, sempre iniciar como recolhido
    sidebar.classList.add("close");
    localStorage.setItem("sidebar", "close");
} else {
    // Em desktops, usar o estado salvo
    if (savedSidebarState === "close") {
        sidebar.classList.add("close");
    } else {
        sidebar.classList.remove("close");
    }
}


// Função para desativar animações temporariamente
function disableAnimations() {
    body.style.transition = 'none';
    sidebar.style.transition = 'none';
    logoAvi.style.transition = 'none';
    logo.style.transition = 'none';
}

// Função para reativar animações após um tempo
function enableAnimations() {
    setTimeout(() => {
        body.style.transition = '';
        sidebar.style.transition = '';
        logoAvi.style.transition = '';
        logo.style.transition = '';
    }, 300); // Intervalo suficiente para evitar animações na carga da página
}

// Desativar as animações ao carregar a página
disableAnimations();
window.addEventListener('load', enableAnimations);

toggle.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        // Em dispositivos móveis, alternar altura (de cima para baixo)
        sidebar.classList.toggle("close");
        localStorage.setItem("sidebar", sidebar.classList.contains("close") ? "close" : "open");
    } else {
        // Comportamento padrão no desktop (esquerda-direita)
        sidebar.classList.toggle("close");
        localStorage.setItem("sidebar", sidebar.classList.contains("close") ? "close" : "open");
    }
});


searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
    localStorage.setItem("sidebar", "open");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
        logo.src = "logo_.png";
        logoAvi.src = "aviat_.png";
        localStorage.setItem("theme", "dark");
    } else {
        modeText.innerText = "Dark mode";
        logo.src = "logo.png";
        logoAvi.src = "aviat.png";
        localStorage.setItem("theme", "light");
    }
});

document.getElementById("anoAtual").textContent = new Date().getFullYear();
