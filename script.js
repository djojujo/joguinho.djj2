 const caixaPrincipal = document.querySelector(".caixa-principal");
 const caixaperguntas = document.querySelector(".caixa-perguntas");
 const caixaalternativas = document.querySelector(".caixa-alternativas");
 const caixaresultado = document.querySelector(".caixa-resultado");
 const textoResultado = document.querySelector(".texto-resultado");

 const perguntas = [
    {
        enunciado:" No ambito social voce prefere",
        alternativas: [
            {
            texto:"Você prefere um sistema educacional onde todos os professores usam fantasias engraçadas para tornar as aulas mais divertidas, mas com uma carga horária dobrada para ambos.",
            afirmacao:"Afirmação 1",
            },
            {
            texto:"Ou um sistema educacional com professores sérios e rigorosos com a carga horária reduzida para ambos.",
            afirmacao:"Afirmação 2",
            },
        ]
    },
    {
        enunciado:" No ambito ambiental voce prefere",
        alternativas: [
            {
            texto:"Você prefere uma cidade com mais áreas verdes e parques, mas que pode ter um tráfego mais intenso.",
            afirmacao:"Afirmação 3",
            },
            {
            texto:"ou uma cidade mais limpa em termos de tráfego, mas com menos áreas naturais?",
            afirmacao:"Afirmação 4",
            },
        ]
    },
    {
        enunciado:" No ambito tecnológico voce prefere",
        alternativas: [
            {
            texto:"Você prefere ter um dispositivo de última geração com recursos avançados, mas com uma duração de bateria mais curta",
            afirmacao:"Afirmação 5",
            },
            {
            texto:"ou um dispositivo um pouco mais antigo com bateria que dura muito mais tempo?",
            afirmacao:"Afirmação 6",
            },
        ]
    }
 ]    
 
 let atual = 0;
 let perguntaAtual;
 let historiaFinal = "";

 function mostraPerguntas (){
    if(atual>= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual =perguntas[atual];
    caixaperguntas.textContent = perguntaAtual.enunciado;
    caixaalternativas.textContent = "";
    mostraAlternativas();
 }

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => opcaoSelecionada(alternativa));
        caixaalternativas.appendChild(botaoAlternativa);
  }
}
  function opcaoSelecionada (alternativa){
    const afirmacoes =alternativa.afirmacoes;
    historiaFinal += afirmacoes +"";
    atual++;
    mostraPerguntas();
  }

  function mostraResultado(){
    caixaperguntas.textContent = "Em resumo, você escolheu...";
    textoResultado.textContent = historiaFinal;
    caixaalternativas.textContent ="";
  }

mostraPerguntas();

