function validacao(){
	var login=document.getElementById("login").value
	var senha=document.getElementById("senha").value
	if(login==""||senha==""){
		alert("Digite algo nos dois campos.")
		return false;
	}else{
		return true;
	}
}

function validacaoCliente(){
	var nome= $("#nome").val()
	var telefone = $("#telefone").val()
	var endereco = $("#endereco").val()
	var email = $("#email").val()
	if(nome==""||telefone==""||endereco==""||email==""){
		alert("Não deixe espaços em branco!")
		return false;
	}else if (isNaN(telefone)){
		alert("Telefone deve ser um número!")
		return false;
	}else{
		return true;
	}
}
function temcerteza(){
	x = confirm("Tem certeza que deseja excluir?"); 
	if (x == true){
		return true;
	}else{
		return false;
	}
}
