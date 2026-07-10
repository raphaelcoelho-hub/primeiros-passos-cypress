# Meus primeiros passos em automação com Cypress

Este repositório contém um treinamento de automação de testes desenvolvido para validar os fluxos da plataforma OrangeHRM. O objetivo principal é aplicar as melhores práticas de engenharia de QA, estruturando testes robustos, manuteníveis e dinâmicos.

## Instalação
```bash
npm install
```
> **NOTA;**
>
> É necessário ter o **node** instalado

## Como rodar
```bash
# Abrir o Cypress 
npx cypress open

# Você pode rodar também na linha de comando
npx cypress run
```
## 1 - O Que Foi Desenvolvido nesta Jornada

> Instalação e Estrutura Inicial

> Configuração do ambiente de testes do zero.

> Entendimento da arquitetura do Cypress e de suas pastas principais (`e2e`, `support`, `fixtures`).

## 2 -  Automação de Cenários Reais e Tratamento de Erros

> Criação de scripts para validar fluxos cruciais, como cenários de **Login (Sucesso e Falha)**.

> Domínio dos comandos nativos para interagir com elementos da tela (`cy.visit()`, `cy.get()`, `cy.type()`, `cy.click()`).

> Resolução prática de bugs e erros de tipagem do Cypress.

## 3 - Organização de Código com Page Objects

> Aplicação do padrão de projeto **Page Objects** para separar a lógica dos testes da identificação dos elementos visuais, facilitando a manutenção do código.

## 4 - Geração de Dados Dinâmicos (Massa de Testes)
* Integração da biblioteca **ChanceJS** para gerar dados randômicos (nomes, sobrenomes e textos) em tempo de execução, evitando falhas por dados duplicados no banco de dados.

### 5 - Boas Práticas de Versionamento
> Uso cirúrgico do arquivo `.gitignore` para impedir o envio de arquivos pesados (`node_modules/`) ou temporários (`videos/`, `screenshots/`), mantendo o repositório leve.
> Limpeza de cache com comandos Git para garantir um histórico de commits limpo e profissional.
