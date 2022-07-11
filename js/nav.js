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