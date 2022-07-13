var sobreMim = document.getElementById("sobre");
var skills = document.getElementById("habilidades");
var formacao = document.getElementById("formacao");
var projetos = document.getElementById("experiencia");
var chamada = document.getElementById ("chamada");
var lista = document.getElementById ("cabecalho__menu-lista");


lista.addEventListener ("click", function (evento){
  var eventoTarget = evento.target;
 verificaDataset(eventoTarget);

})
function verificaDataset (evento){
  const dates = evento.dataset.tipo
  if(funcoes[dates]){
    funcoes[dates]()
  }
}
var funcoes = {
  habilidades: function(){
   tiraDisplay(skills);
  },
  sobre: function(){
    tiraDisplay(sobreMim);
  },
  home: function(){
    location.reload();
  },
  formacao: function(){
    tiraDisplay(formacao);
    
  },
  projetos: function(){
    tiraDisplay(projetos);
  }

}

function tiraDisplay(sectionComDisplay){
  sobreMim.style.display = "none";
  skills.style.display = "none";
  formacao.style.display = "none";
  projetos.style.display = "none";
  chamada.style.display = "none";
  sectionComDisplay.style.display = "flex";
}

var input = document.querySelectorAll(".formulario__input");
var erro = document.querySelectorAll(".formulario__spanTexto")
var botao = document.querySelector(".formulario__botao");
var label = document.querySelectorAll("label")

botao.addEventListener("click", function(){
 for(i = 0; i < input.length; i++){
  if(!input[i].validity.valid){
    label[i].classList.add ("formulario__label--erro")
    input[i].classList.add ("formulario__input--erro")
    erro[i].style.display = "block";
    erro[i].innerHTML = mostraMensagem (input[i].dataset.tipo, input[i]);
    
  }
  else{
    input[i].classList.remove ("formulario__input--erro")
    label[i].classList.remove ("formulario__label--erro")
    erro[i].style.display = "none";
  }
 }

})
var tiposDeErro = [
  "valueMissing",
  "typeMismatch"
]
var mensagensErro = {
  nome:{
    valueMissing: "O campo nome não pode estar vazio."
  },
  assunto:{
    valueMissing: "O campo assunto não pode estar vazio."

  },
  email: {
    valueMissing: "O campo email não pode estar vazio.",
    typeMismatch: "O email digitado não é valido"
  },
  texto:{
    valueMissing: "O campo de mensagem não pode estar vazio."
  }
}
function mostraMensagem (tipoDeInput, input){
  var mensagem = "";
  tiposDeErro.forEach(erro =>{
    if(input.validity[erro]){
      mensagem = mensagensErro[tipoDeInput][erro];
    }

  })

  return mensagem;
}