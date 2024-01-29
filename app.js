/*let titulo = document.querySelector("h1");
titulo .innerHTML = " Jogo do número secreto";

let paragrafo = document.querySelector("p");
paragrafo .innerHTML = "Escolha um número de 1 a 10";*/

// criaremos as funcoes pra chamar nossos botoes funcao e parte de um trecho do co
//digo q se repete muito ,ao inves de repetirmos tudo apenas chamamos p ela
const listaDeNumerosSorteados=[];
let numeroLimite= 10;
let numeroSecreto = gerarNumeroAleatorio();
// passo 2 contar as tentativas
let tentativas = 1;
mensagemInicial();


function verificarChute(){
   let chute=document.querySelector('input').value;
   if(chute==numeroSecreto){
      exibirTextoNaTela('h1','Acertou!!');
      let palavraTentativa= tentativas>1?`tentativas`:`tentativa`;
      let mensgemTentativas=`vc descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`
      exibirTextoNaTela('p',mensgemTentativas)
      document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
    if(chute>numeroSecreto){
        exibirTextoNaTela('p','O Número Secreto é Menor');
    }else{
        exibirTextoNaTela('p', 'O Número Secreto é Maior');
    }
    tentativas++;
    limparCampo()
   }
    

}
  

function exibirTextoNaTela(tag,texto){
    let campo=document.querySelector(tag)
    campo.innerHTML=texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2})
}

exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número de 1 a 10');
   // criandoa funcao para gerar o numero aleatorio
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*numeroLimite +1)
    let quantidadeDeElementosDaLista=listaDeNumerosSorteados.length
    if(quantidadeDeElementosDaLista == numeroLimite){
        listaDeNumerosSorteados=[];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
        
    }
}

function limparCampo(){
    chute=document.querySelector('input');
    chute.value ='';
}

//comecamos por colocar o texto nas tags ,depois a funcao gerer numero, depois a funcao
// chute  depois contamos as tentativas e agora criando a funcao limpa campo

  function mensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número de 1 a 10');
  }
 function reiniciarJogo(){
    numeroSecreto=gerarNumeroAleatorio();
    tentativas=1
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);


 }
 // por ultimo  criamos a funcao reiniciar o jogo diferente das funcoes aki apresentadas essa tem inicio
 // no html como id do botao on click, 