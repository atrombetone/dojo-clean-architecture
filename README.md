# Sobre o Projeto

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

O objetivo deste projeto é gerar insumo para aplicação em um DOJO de testes Unitários e teste End To End (E2E)

## WebServer de Desenvolvimento
Etapas para montagem do ambiente:
* ...$ git clone https://github.com/atrombetone/dojo-test.git
* ...$ cd dojo-test
* ...$ npm install
* ...$ ng serve --open

Abra um segundo terminal e acesse o dir
* ...$ cd dojo-test/wiremock
* ...$ ./run.sh

Aguarde até que o Wiremock suba a API na porta 3002
em seguida volte ao navegador na aplicação http://localhost:4200

## ScreenShots
<table>
    <tr>
        <td colspan="2">
            <img src="https://github.com/atrombetone/dojo-test/blob/master/screenshots/home_00.png" />
        </td>
    </tr>
    <tr>
        <td>
            <img src="https://github.com/atrombetone/dojo-test/blob/master/screenshots/products_00.png" />
        </td>
        <td>
            <img src="https://github.com/atrombetone/dojo-test/blob/master/screenshots/products_01.png" />
        </td>
    </tr>
</table>

## Testes Unitários

Execute o comando `ng test` para rodar os testes unitários via [Karma](https://karma-runner.github.io).

Uma segunda opção para obter mais detalhes pode ser utilizado o comando `ng test --code-coverage`, dessa forma é gerado um diretório chamado `coverage` na raiz do projeto contendo um relatório detalhado em HTML mostrando o resultado da cobertura.
<img src="https://github.com/atrombetone/dojo-test/blob/master/screenshots/karma_01.png">
<img src="https://github.com/atrombetone/dojo-test/blob/master/screenshots/coverage_01.png">

## Teste End To End (E2E)

Execute o comando `ng e2e` para rodar os testes End To End via [Protractor](http://www.protractortest.org/).

<img src="https://github.com/atrombetone/dojo-test/blob/master/screenshots/e2e_3.png">

## Teste de Mutação 

### Requisitos

É necessário instalar a ferramenta de linha de comando (stryker-cli), para isso utilize o comando a seguir:

$ npm install -g stryker-cli

### Execução

Execute o comando `npm run mutation` para rodar os testes de mutação via [Stryker](https://stryker-mutator.io/).

### Teste de Mutação - O que são? Onde vivem? Do que se alimentam?

Teste de mutação é um componente que pode ser conectado à um projeto, sua função é escanear os testes unitários contidos no projeto e realizar mutações nos asserts/expects modificando o valor esperado a fim de fazer com o teste falhe.

Na home page do projeto há uma breve explicação de como isso é feito. Imagine o método a seguir:
```javascript
function isUserOldEnough(user) {
  return user.age >= 18;
}
```
O Stryker avalia o código e gera possíveis combinações de resultado da seguinte forma:
```javascript
/* 1 */ return user.age > 18;
/* 2 */ return user.age < 18;
/* 3 */ return false;
/* 4 */ return true;
```

Com esses possivéis retornos são criados, os denominados "Mutantes" neste modelo de teste.
Após essa etápa os mutantes são correlacionados aos seus respectivos testes unitários, quando o mutante é aplicado em um teste unitário e o teste falha, diz-se que o mutante foi abatido indicando que o teste unitário está coerente ao que se propôem. Quando o mutante é aplicado ao teste unitário e o teste não quebra, denomina-se que o mutante sobreviveu e este mutante vai para lista de sobreviventes.
Para que um teste unitário tenha sucesso pelo menos um mutante deve ser abatido, caso todos os mutantes sobrevivam o teste unitário é reprovado no quisito de "Teste de Mutação"

Tendo a vista este projeto, veja que ele obteve 100% de cobertura no testes unitários, veja o resultado dos testes de mutação:

<img src="https://github.com/atrombetone/dojo-test/blob/master/screenshots/mutation_01.png">

<img src="https://github.com/atrombetone/dojo-test/blob/master/screenshots/mutation_02.png">


