function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let randomNumber = randomInteger(1, 12);

describe('Покупка фото для покемона', function () {
   it('Правильные логин и пароль', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type ('ввести почту');
        cy.get('#password').type ('ввести пароль');
        cy.get('.auth__input-icon').should('be.visible');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(`:nth-child(${randomNumber}) > .shop__button`).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('ввести номер карты');
        cy.get('.pay__cardtypeimage').should('be.visible');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('дата');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('код');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ввести мя');
        cy.get('.pay-btn').click();
        cy.get('.payment__submit-button').should('be.disabled');
        cy.get('.payment__defolt-decline').should('be.enabled')
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно').should('be.visible');
        cy.get('.payment__adv').click()
        cy.clearCookies()


})
   })