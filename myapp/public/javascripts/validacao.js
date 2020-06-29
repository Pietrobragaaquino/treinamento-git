var validacao = function(){
	var nome = document.getElementById("nome").value;
	var sobrenome = document.getElementById("sobrenome").value;
	var telefone = document.getElementById("telefone").value;
	if(nome==""||sobrenome==""||telefone==""){
		alert("Por favor preencha os 3 campos.")
		return false;
	}
	return true;
}


var excluirDados = function(cpf){
	if(confirm("Deseja realmente excluir?")){
		window.location.href = "/excluir?cpf="+cpf;
	}
}