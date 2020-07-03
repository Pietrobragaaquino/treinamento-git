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