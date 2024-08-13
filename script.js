 const caixaPrincipal = document.querySelector(".caixa-principal");
 const caixaperguntas = document.querySelector(".caixa-perguntas");
 const caixaalternativas = document.querySelector(".caixa-alternativas");
 const caixaresultado = document.querySelector(".caixa-resultado");
 const textoresultado = document.querySelector(".texto-resultado");

 const perguntas = [
    {
        enunciado:" No ambito social voce prefere",
        alternativas: [
            {
            texto:"Alternativa 1",
            afirmacao:"Afirmação 1",
            },
            {
            texto:"Alternativa 2",
            afirmacao:"Afirmação 2",
            },
        ]
    },
    {
        enunciado:" No ambito ambiental voce prefere",
        alternativas: [
            {
            texto:"Alternativa 3",
            afirmacao:"Afirmação 3",
            },
            {
            texto:"Alternativa 4",
            afirmacao:"Afirmação 4",
            },
        ]
    },
    {
        enunciado:" No ambito tecnológico voce prefere",
        alternativas: [
            {
            texto:"Alternativa 5",
            afirmacao:"Afirmação 5",
            },
            {
            texto:"Alternativa 6",
            afirmacao:"Afirmação 6",
            },
        ]
    }
 ]    
 
 let atual = 0;
 let perguntaAtual;

 function mostraPerguntas (){
    perguntaAtual =perguntas[atual];
    caixaperguntas.textContent = perguntaAtual.enunciado;
    caixaalternativas.textContent = "";
    mostraAlternativas();
 }

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        caixaalternativas.appendChild(botaoAlternativa);
    }
}

 mostraPerguntas();

