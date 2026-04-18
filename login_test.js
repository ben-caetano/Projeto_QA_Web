Feature('login');

Scenario('login com sucesso',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user','abc@yahoo.com')
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado',5)
}).tag('@sucesso')

Scenario('login apenas com e-mail',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#user','abc@yahoo.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida',5)

})

Scenario('login apenas com senha ',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login',10)
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido',5)

})

Scenario('login sem e-mail e senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login',10)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido',5)

});
