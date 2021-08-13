$(document).ready(function () {
	$('#logradouro,#bairro,#localidade,#uf').hide();
	$("#botao").on("click", function(){
		$("#logradouro,#bairro,#localidade,#uf").show(500);
	});
});
 
 const botao = document.querySelector('#botao')
 //////////////////////////////////////////////////////////////////////
 const mostrardados = (resultado) =>{
 	for(const campo in resultado){
 		if(document.querySelector("#"+campo)){
 			document.querySelector("#"+campo).value = resultado[campo]
 		}
 	}
 }

 //////////////////////////////////////////////////////////////////

 botao.addEventListener('click', (e) =>{
 	let busca = cep.value.replace("-","")
 	const opcoes = {
 		method:"GET",
 		mode:"cors",
 		cache:"default"
 	}
 	fetch(`https://viacep.com.br/ws/${busca}/json/`,opcoes)
 	.then(response =>{ response.json()
 		.then(dados => mostrardados(dados))
 		
 		

 	})
 	
 	.catch(e => console.log('Erro ao BUSCAR CEP! ' + e,message))
 })

//  const mover = document.querySelector('')