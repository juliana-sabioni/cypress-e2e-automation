
# Tutorial: Criando um Formulário de Cadastro com HTML/CSS/JS e Testando com Cypress

## 🧱 Parte 1: Criando a Página de Cadastro

### Estrutura de Arquivos
```
/projeto/
├── formulario/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── cypress/
│   └── e2e/
│       └── formulario.cy.js
│
├── cypress.config.js
├── package.json
├── node_modules/
└── README.md

---

## 🧪 Parte 2: Testando com Cypress

### Passo 1: Instalar o Cypress
```bash
npm install cypress --save-dev
```
### Passo 2: Criar a pasta cypress/e2e 

### Passo 3: Rodar o Cypress

```bash
npx cypress open
```

### Passo 4: Servir o HTML localmente (ex: com Live Server)
- Use a extensão do VS Code "Live Server" ou outro servidor local.
- Acesse via `http://127.0.0.1:5500/index.html` 

### Passo 5: Criar o teste Cypress

Crie um arquivo em `cypress/e2e/cadastro.cy.js`:

```js
describe('Página de Cadastro', () => {
  it('Deve preencher o formulário e exibir mensagem de sucesso', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    cy.get('input[name="nome"]').type('Maria Teste');
    cy.get('input[name="email"]').type('maria@teste.com');
    cy.get('input[name="senha"]').type('123456');

    cy.get('button[type="submit"]').click();

    cy.get('#mensagem-sucesso').should('be.visible');
    cy.contains('Cadastro realizado com sucesso!');
  });
});
```

---
Pronto! 🚀
