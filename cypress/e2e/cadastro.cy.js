describe('Cadastro de usuário', () => {
    it('Deve preencher o formulário e exibir mensagem de sucesso', () => {
        
        //Alterando para a URL do projeto
        cy.visit('http://127.0.0.1:3002/formulário/index.html');

        //Preenchendo os campos
        cy.get('input[name="nome"]').type('Juliana Sabioni');
        cy.get('input[name="email"]').type('jsd@ymail.com');
        cy.get('input[name="senha"]').type('123456');

        //Submentendo o formulário
        cy.get('button[type="submit"]').click();

        //Verificando se a mensagem de sucesso é exibida
        cy.get('#mensagem-sucesso').should('be.visible');
        cy.contains('Cadastro realizado com sucesso!');

    });
});