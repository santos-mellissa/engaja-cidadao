# Engaja Cidadão

## Descrição:
Aplicação web desenvolvida como projeto universitário para a disciplina de Usina de Projetos Experimentais. O projeto visa simplificar o relato de problemas urbanos proporcionando uma plataforma para coleta e gestão de dados.

## Desenvolvido com:

**Front-end:**
- `JavaScript`
- `HTML`
- `CSS`

**Back-end:**
- `Node.js`
- `Express`
- `MySQL`

## Diagrama relacional do banco de dados:
![Captura de tela 2023-11-20 224022](https://github.com/santos-mellissa/engaja-cidadao/assets/114121324/758e548f-bcf1-4e6f-ac4b-beecb33eaca3)

## Como instalar:
>⚠️ Para prosseguir, é necessário ter o MySQL Server instalado em sua máquina.

Estas instruções fornecerão a você uma cópia completa do projeto instalado e funcionando em sua máquina local, para fins de testes e desenvolvimento.
1. Clone o repositório:
```sh
git clone git@github.com:santos-mellissa/engaja-cidadao.git
```
2. Entre na pasta do repositório que você acabou de clonar:
```sh
cd engaja-cidadao
```
3. Instale as dependências dentro do diretório do back-end:
```sh
cd backend
npm i
```
4. Para rodar o tanto o front quanto o back em modo de desenvolvimento, execute o comando abaixo dentro de seus respectivos diretórios:
```sh
npm run dev
```
5. A aplicação irá rodar nos seguintes endpoints:
- front-end: [127.0.0.1:5173/](http://127.0.0.1:5173/)
- back-end: [127.0.0.1:3001/](http://127.0.0.1:3001/)

6. Para rapidamente popular as tabelas com dados fictícios, execute o comando abaixo dentro do diretório do backend (Opcional):
```sh
npm run db:seed
```

## Variáveis de ambiente:
WIP

## Rotas da API:

Você pode testar a API com softwares como [`Insomnia`](https://insomnia.rest/download), [`Postman`](https://www.postman.com/) ou [`Thunder Client`](https://www.thunderclient.com/).

  - GET: `'/query'`
  > Este _endpoint_ retorna todos os reports.
  - POST: `'/report'`
  > Este _endpoint_ insere os dados de usuário e report no banco de dados.
<br />

---

2023 © developed by [**Mell Santos**](https://github.com/santos-mellissa)

<div>
  <a href = "https://www.linkedin.com/in/mell-santos/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin" />
  </a>
  <a href="mailto:mellissa03santos@gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Gmail-c71610?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</div>

