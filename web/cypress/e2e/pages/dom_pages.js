/// <reference types="Cypress"  />  

const url = Cypress.config('baseUrl')

class DomPages {
   accessLoginPage () {
       cy.visit(url + '/challenging_dom')       
   }

   validateCanvas() {
    cy.get('#canvas').then($canvas => {
        const canvas = $canvas[0];
        const context = canvas.getContext('2d');
        
        // Captura a imagem do canvas
        const dataUrl = canvas.toDataURL('image/png');
        
        cy.task('compareImages', { dataUrl }).then(result => {
          expect(result).to.be.true; // Supondo que compareImages retorne true se as imagens forem iguais
        });
      });
   }

    clickButton(){
        cy.contains('button','bar')

    }

    getColumn() {
        cy.get('td:contains(Iuvaret0)'.find('td:constain(edit)'))
    }
}
export default DomPages
