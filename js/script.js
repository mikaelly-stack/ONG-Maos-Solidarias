import {
    configurarMascaras
} from "./mascaras.js";

import {
    rotas
} from "./rotas.js";

import {
    configurarFormulario,
    restaurarCadastro
} from "./formulario.js";

document.addEventListener("DOMContentLoaded", function () {


    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("ativo");

            const aberto = menu.classList.contains("ativo");

            menuToggle.setAttribute("aria-expanded", aberto);
            menuToggle.setAttribute(
                "aria-label",
                aberto ? "Fechar menu" : "Abrir menu"
            );
        });
    }

    const btnTema = document.getElementById("btn-tema");

    if (btnTema) {
        btnTema.addEventListener("click", function () {
            document.body.classList.toggle("modo-escuro");

            const modoEscuroAtivo =
                document.body.classList.contains("modo-escuro");

            btnTema.textContent = modoEscuroAtivo
                ? "Modo claro"
                : "Modo escuro";

            btnTema.setAttribute(
                "aria-label",
                modoEscuroAtivo
                    ? "Ativar modo claro"
                    : "Ativar modo escuro"
            );
        });
    }
    const dropdown = document.querySelector(".dropdown");

    if (dropdown) {
        const dropdownLink = dropdown.querySelector("a");

        dropdownLink.addEventListener("click", function (event) {
            if (window.innerWidth <= 768) {
                event.preventDefault();
                dropdown.classList.toggle("ativo");
            }
        });
    }
        // Roteamento da SPA

    const app = document.getElementById("app");

    function renderizarRota() {
        const caminho = window.location.hash.replace("#", "") || "/";
        const conteudo = rotas[caminho] || rotas["/"];

        app.innerHTML = conteudo;

        configurarMascaras();
        configurarFormulario();

        if (caminho === "/cadastro") {
            restaurarCadastro();
        }
    }

    document.querySelectorAll("nav a").forEach(function (link) {
        link.addEventListener("click", function (event) {
            const destino = link.getAttribute("href");

            if (destino === "index.html") {
                event.preventDefault();
                window.location.hash = "/";
            }

            if (destino.startsWith("projetos.html")) {
                event.preventDefault();
                window.location.hash = "/projetos";
            }

            if (destino === "cadastro.html") {
                event.preventDefault();
                window.location.hash = "/cadastro";
            }
        });
    });

    app.addEventListener("click", function (event) {
        const link = event.target.closest("a");

        if (!link) {
            return;
        }

        const destino = link.getAttribute("href");

        if (destino === "cadastro.html") {
            event.preventDefault();
            window.location.hash = "/cadastro";
        }
    });

    window.addEventListener("hashchange", renderizarRota);

    renderizarRota();

});