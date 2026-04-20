/* 
   Variável global de idioma
   Controla o estado atual do idioma (PT/EN)
 */

let isEnglish = false;


/* 
   Funcoes de tema (dark mode)
   Gestão do modo claro/escuro com persistência local
 */

/* Alterna entre modo claro e escuro e guarda preferência */
function toggleTheme() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.setItem("tema", "light");
    }
}

/* Aplica o tema guardado no armazenamento local */
function aplicarTemaGuardado() {
    const tema = localStorage.getItem("tema");

    if (tema === "dark") {
        document.body.classList.add("dark");
    }
}


/* 
   Sistema de idioma (PT / EN)
   Permite alternância dinâmica de conteúdo textual
 */

/* Atualiza o texto dos elementos com base no idioma ativo */
function aplicarIdioma() {
    const elements = document.querySelectorAll("[data-pt]");

    elements.forEach(el => {
        el.textContent = isEnglish
            ? el.getAttribute("data-en")
            : el.getAttribute("data-pt");
    });
}

/* Alterna entre português e inglês e guarda preferência */
function toggleLanguage() {
    isEnglish = !isEnglish;

    localStorage.setItem("lang", isEnglish ? "en" : "pt");

    aplicarIdioma();
}

/* Carrega o idioma previamente guardado pelo utilizador */
function carregarIdiomaGuardado() {
    const lang = localStorage.getItem("lang");

    if (lang === "en") {
        isEnglish = true;
    }

    aplicarIdioma();
}

/*
   Validação de NIF
   Verifica se o número tem formato válido
 */

/* Validação estrutural do NIF (9 dígitos numéricos) */
function validarNIF(nif) {
    nif = nif.trim();
    return /^[0-9]{9}$/.test(nif);
}

/* Executa validação e apresenta feedback ao utilizador */
function verificarNIF() {
    const input = document.getElementById("nif");
    const resultado = document.getElementById("resultadoNIF");

    if (validarNIF(input.value)) {
        resultado.textContent = isEnglish ? "Valid NIF" : "NIF válido";
        resultado.style.color = "green";
    } else {
        resultado.textContent = isEnglish ? "Invalid NIF" : "NIF inválido";
        resultado.style.color = "red";
    }
}


/* 
   Simulador de IRS
   Implementa cálculo simplificado de imposto
 */

/* Calcula o IRS com base em escalões progressivos e deduções */
function calcularIRS() {
    const rendimento = parseFloat(document.getElementById("rendimento").value);
    const resultado = document.getElementById("resultadoIRS");

    /* Validação do rendimento introduzido */
    if (isNaN(rendimento) || rendimento <= 0) {
        resultado.textContent = isEnglish
            ? "Insert valid income."
            : "Insira um rendimento válido.";
        resultado.style.color = "red";
        return;
    }

    let imposto = 0;

    /* Cálculo do imposto por escalões progressivos */
    if (rendimento <= 10000) {
        imposto = rendimento * 0.14;
    } else if (rendimento <= 20000) {
        imposto = (10000 * 0.14) + (rendimento - 10000) * 0.23;
    } else if (rendimento <= 40000) {
        imposto = (10000 * 0.14) + (10000 * 0.23) + (rendimento - 20000) * 0.30;
    } else {
        imposto = (10000 * 0.14) + (10000 * 0.23) + (20000 * 0.30) + (rendimento - 40000) * 0.40;
    }

    /* Aplicação de deduções com limites máximos definidos */
    const saude = Math.min(parseFloat(document.getElementById("saude").value) || 0, 1000);
    const educacao = Math.min(parseFloat(document.getElementById("educacao").value) || 0, 800);
    const habitacao = Math.min(parseFloat(document.getElementById("habitacao").value) || 0, 1200);
    const outras = Math.min(parseFloat(document.getElementById("outras").value) || 0, 500);

    /* Cálculo do impacto dos dependentes */
    const dependentes = parseInt(document.getElementById("dependentes").value) || 0;
    const deducaoDependentes = dependentes * 600;

    /* Soma total das deduções */
    const totalDeducoes = saude + educacao + habitacao + outras + deducaoDependentes;

    /* Cálculo do imposto final */
    let impostoFinal = Math.max(0, imposto - totalDeducoes);

    /* Apresentação do resultado final ao utilizador */
    resultado.innerHTML = `
        ${isEnglish ? "Gross tax" : "IRS bruto"}: ${imposto.toFixed(2)} €<br>
        ${isEnglish ? "Deductions" : "Deduções"}: ${totalDeducoes.toFixed(2)} €<br>
        ${isEnglish ? "Final tax" : "IRS final"}: <strong>${impostoFinal.toFixed(2)} €</strong>
    `;

    resultado.style.color = "green";
}


/* 
   Contador de visitas
   Armazena visitas no localStorage
 */

/* Incrementa e atualiza o contador de visitas */
function atualizarContadorVisitas() {
    let visitas = parseInt(localStorage.getItem("contadorVisitas")) || 0;

    visitas++;

    localStorage.setItem("contadorVisitas", visitas);

    const elemento = document.getElementById("contadorVisitas");
    if (elemento) {
        elemento.textContent = visitas;
    }
}


/*
   Permite efeito de zoom ao clicar
 */

/* Ativa funcionalidade de zoom em imagens específicas */
function ativarZoomImagens() {
    const images = document.querySelectorAll("img[data-zoom]");

    images.forEach(img => {
        img.addEventListener("click", function () {
            this.classList.toggle("zoom");
        });
    });
}


/* 
   Executa funções essenciais ao carregar a página
 */

document.addEventListener("DOMContentLoaded", function () {
    atualizarContadorVisitas();
    aplicarTemaGuardado();
    carregarIdiomaGuardado();
    ativarZoomImagens();
});