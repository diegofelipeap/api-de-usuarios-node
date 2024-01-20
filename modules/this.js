/*
        THIS -> este, esta, isto...
    No JS, this faz Referência:
        Node => module.exports
        Web => window

    Escopo:
    > GLOBAL: Quando começamos a escrever nossa aplicação.
    No contexto global, o this faz referência ao objeto global, que
    é o objeto window no navegador ou ao objeto global no NOde.js.

    > LOCAL: Por exemplo, dentro de uma function!
*/

const person = {
    name:'Diego',
    age:24,
    talk: function(){
        console.log(this.name)
    }
}

person.talk()