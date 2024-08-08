 const caixaPrincipal = document.querySelector(".caixa-principal");
 const caixaperguntas = document.querySelector(".caixa-perguntas");
 const caixaalternativas = document.querySelector(".caixa-alternativas");
 const caixaresultado = document.querySelector(".caixa-resultado");
 const textoresultado = document.querySelector(".texto-resultado");

 const perguntas = [
    {
        enunciado:" No ambito social voce prefere",
        alternativas: ["voce prefre....", "ou voce prefere..."]
    },
    {
        enunciado:" No ambito ambiental voce prefere",
        alternativas: ["Alternativa 1", "Alternativa 2"]
    },
    {
        enunciado:" No ambito tecnológico voce prefere",
        alternativas: ["Alternativa 1", "Alternativa 2"]
    }
 ]    
 const media = [120, 130, 140, 110, 30, 50, 4];
 const calculo = 
 (media[0]+media[1]+media[2]+media[3]+media[4]+media[5])/6;
 console.log("A media foi: "+ calculo)
 