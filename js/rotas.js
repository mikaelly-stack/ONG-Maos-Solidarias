export const rotas = {
    "/": `
        <section>
            <h2>Sobre a ONG</h2>

            <p>
                A ONG Mãos Solidárias desenvolve ações sociais para apoiar
                pessoas em situação de vulnerabilidade e promover a
                solidariedade na comunidade.
            </p>

            <picture>
                <source srcset="../imagens/voluntarios.webp" type="image/webp">

                <img
                    src="../imagens/voluntarios.jpg"
                    alt="Voluntários realizando uma ação de doação para a comunidade">
            </picture>
        </section>

        <section>
            <h2>Nossa missão</h2>

            <p>
                Promover iniciativas que transformem vidas e incentivem
                a participação da comunidade em ações de solidariedade.
            </p>
        </section>

        <section>
            <h2>Contato</h2>

            <address>
                <p>Endereço: Rua da Solidariedade, 100 - Belém/PA</p>
                <p>Telefone: (91) 99999-9999</p>
                <p>E-mail: contato@maossolidarias.org</p>
            </address>

            <div class="alert">
                <strong>Informação:</strong>
                Confira nossos projetos e participe das ações da ONG.
            </div>

            <p>
                Categorias:
                <span class="badge">Voluntariado</span>
                <span class="badge">Doações</span>
            </p>

            <div class="toast" role="status" aria-live="polite">
                Cadastro realizado com sucesso!
            </div>
        </section>
    `,

    "/projetos": `
        <section>
            <h2>Projetos e iniciativas</h2>

            <p>
                A ONG Mãos Solidárias desenvolve projetos voltados ao apoio
                de pessoas em situação de vulnerabilidade e ao fortalecimento
                da solidariedade na comunidade.
            </p>

            <article>
                <h3>Campanhas de arrecadação</h3>

                <p>
                    Realizamos campanhas para arrecadar alimentos, roupas,
                    materiais escolares e outros itens destinados às pessoas
                    que necessitam de apoio.
                </p>

                <picture>
                    <source srcset="../imagens/doacoes.webp" type="image/webp">

                    <img
                        src="../imagens/doacoes.jpg"
                        alt="Voluntários organizando doações para a comunidade">
                </picture>
            </article>

            <article>
                <h3>Ações comunitárias</h3>

                <p>
                    Organizamos ações sociais em parceria com voluntários
                    e membros da comunidade para atender diferentes
                    necessidades sociais.
                </p>
            </article>
        </section>

        <section>
            <h2>Doações</h2>

            <p>
                As doações ajudam a manter nossos projetos e permitem que
                a ONG continue realizando ações de apoio à comunidade.
            </p>

            <p>
                Para contribuir financeiramente, entre em contato conosco
                pelos canais informados na página inicial.
            </p>
        </section>

        <section>
            <h2>Voluntariado</h2>

            <p>
                Pessoas interessadas em contribuir com seu tempo e suas
                habilidades podem participar das nossas atividades
                voluntárias.
            </p>

            <p>
                Para demonstrar interesse em participar, acesse a página
                de cadastro e preencha o formulário.
            </p>

            <a href="cadastro.html">Quero ser voluntário</a>
        </section>
    `,

    "/cadastro": `
        <h2>Cadastro de apoiadores</h2>

        <p>
            Preencha o formulário abaixo para demonstrar seu interesse
            em participar das ações da ONG Mãos Solidárias.
        </p>

        <form action="#" method="post">

            <fieldset>
                <legend>Dados pessoais</legend>

                <label for="nome">Nome completo:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    autocomplete="name"
                    required
                    minlength="3"
                >

                <br><br>

                <label for="cpf">CPF:</label>
                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    placeholder="000.000.000-00"
                    pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                    maxlength="14"
                    autocomplete="off"
                    required
                >

                <br><br>

                <label for="nascimento">Data de nascimento:</label>
                <input
                    type="date"
                    id="nascimento"
                    name="nascimento"
                    autocomplete="bday"
                    required
                >
            </fieldset>

            <br>

            <fieldset>
                <legend>Dados de contato</legend>

                <label for="email">E-mail:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    autocomplete="email"
                    placeholder="seuemail@exemplo.com"
                    required
                >

                <br><br>

                <label for="telefone">Telefone:</label>
                <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    placeholder="(00) 00000-0000"
                    pattern="^\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}$"
                    maxlength="15"
                    autocomplete="tel"
                    required
                >
            </fieldset>

            <br>

            <fieldset>
                <legend>Endereço</legend>

                <label for="cep">CEP:</label>
                <input
                    type="text"
                    id="cep"
                    name="cep"
                    placeholder="00000-000"
                    pattern="[0-9]{5}-[0-9]{3}"
                    maxlength="9"
                    inputmode="numeric"
                    autocomplete="postal-code"
                    required
                >

                <br><br>

                <label for="endereco">Endereço:</label>
                <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    required
                >

                <br><br>

                <label for="numero">Número:</label>
                <input
                    type="number"
                    id="numero"
                    name="numero"
                    min="1"
                    autocomplete="off"
                    required
                >

                <br><br>

                <label for="cidade">Cidade:</label>
                <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    autocomplete="address-level2"
                    required
                >

                <br><br>

                <label for="estado">Estado:</label>
                <select
                    id="estado"
                    name="estado"
                    autocomplete="address-level1"
                    required
                >
                    <option value="">Selecione</option>
                    <option value="PA">Pará</option>
                    <option value="AM">Amazonas</option>
                    <option value="AP">Amapá</option>
                    <option value="MA">Maranhão</option>
                    <option value="TO">Tocantins</option>
                    <option value="outro">Outro estado</option>
                </select>
            </fieldset>

            <br>

            <fieldset>
                <legend>Forma de participação</legend>

                <p>Como deseja contribuir?</p>

                <input
                    type="radio"
                    id="voluntariado"
                    name="participacao"
                    value="voluntariado"
                    required
                >
                <label for="voluntariado">Voluntariado</label>

                <br>

                <input
                    type="radio"
                    id="doacao"
                    name="participacao"
                    value="doacao"
                >
                <label for="doacao">Doação</label>
            </fieldset>

            <br>

            <button type="submit">Enviar cadastro</button>
            <button type="reset">Limpar formulário</button>

        </form>
    `
};