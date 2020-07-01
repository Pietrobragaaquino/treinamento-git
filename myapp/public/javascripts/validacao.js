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