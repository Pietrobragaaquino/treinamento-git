function validacao(){
	var nome= document.getElementById("nomecompleto").value
	var cpf = document.getElementById("cpf").value
	var telefone = document.getElementById("telefone").value
	var endereco = document.getElementById("endereco").value
	var email = document.getElementById("email").value
	if(nome==""||cpf==""||telefone==""||endereco==""||email==""){
		alert("Não deixe espaços em branco!")
		return false;
	}else{
		return true;
	}	
}

function validacaobusca(){
	var nomecompleto = document.getElementById("nomecompletobusca").value
	if(nomecompleto==""){
		alert("Digite algo antes de buscar!")
		return false;
	}else{
		return true;
	}
}