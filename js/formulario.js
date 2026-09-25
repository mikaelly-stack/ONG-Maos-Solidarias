import {
    salvarCadastro,
    recuperarCadastro
} from "./storage.js";

export function configurarFormulario() {
    const formulario = document.querySelector("#app form");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const dados = {
            nome: document.getElementById("nome").value,
            cpf: document.getElementById("cpf").value,
            nascimento: document.getElementById("nascimento").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value,
            cep: document.getElementById("cep").value,
            endereco: document.getElementById("endereco").value,
            numero: document.getElementById("numero").value,
            cidade: document.getElementById("cidade").value,
            estado: document.getElementById("estado").value,
            participacao: document.querySelector(
                'input[name="participacao"]:checked'
            )?.value || ""
        };

        salvarCadastro(dados);

        alert("Cadastro salvo com sucesso!");
    });
}

export function restaurarCadastro() {
    const dados = recuperarCadastro();

    if (!dados) {
        return;
    }

    document.getElementById("nome").value = dados.nome || "";
    document.getElementById("cpf").value = dados.cpf || "";
    document.getElementById("nascimento").value = dados.nascimento || "";
    document.getElementById("email").value = dados.email || "";
    document.getElementById("telefone").value = dados.telefone || "";
    document.getElementById("cep").value = dados.cep || "";
    document.getElementById("endereco").value = dados.endereco || "";
    document.getElementById("numero").value = dados.numero || "";
    document.getElementById("cidade").value = dados.cidade || "";
    document.getElementById("estado").value = dados.estado || "";

    if (dados.participacao) {
        const opcao = document.querySelector(
            `input[name="participacao"][value="${dados.participacao}"]`
        );

        if (opcao) {
            opcao.checked = true;
        }
    }
}