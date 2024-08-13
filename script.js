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
            texto:"alternativa 1",
            afirmacao: "afirmação 1",
            },
            texto:"alternativa 2",
            afirmacao: "afirmação 2",
        ]
    },
    {
        enunciado:" No ambito ambiental voce prefere",
        alternativas: [
            {
            texto:"alternativa 3",
            afirmacao: "afirmação 3",
            },
            texto:"alternativa 4",
            afirmacao: "afirmação 4",
        ]
    },
    {
        enunciado:" No ambito tecnológico voce prefere",
        alternativas: [
            {
            texto:"alternativa 5",
            afirmacao: "afirmação 5",
            },
            texto:"alternativa 6",
            afirmacao: "afirmação 6",
        ]
    }
 ]    
 
 let atual = 0;
 let perguntaAtual;

 function mostraPerguntas (){
    perguntaAtual =perguntas[atual];
    caixaperguntas.textContent = perguntaAtual.enunciado;
 }

function mostraAlternativas(){
    for (const alternetiva of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = aalternativa;
        caixaalternativas.appendChild(botaoAlternativa);
    }
}

 mostraPerguntas();

