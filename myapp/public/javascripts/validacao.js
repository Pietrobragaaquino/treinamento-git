function cadastrarPessoas(){




	var nomehtml = $("#nome").val()
	var sobrenomehtml = $("#sobrenome").val()
	var cpfhtml = $("#cpf").val()
	var telefonehtml = $("#telefone").val()
	var enderecohtml = $("#endereco").val()

	if(nomehtml == ""||sobrenomehtml==""||cpfhtml==""||telefonehtml==""||enderecohtml==""){
		alert("Você precisa preencher todos os campos!")
		return;
	}




	var html = "<tr>";
	html += "<td>"+nomehtml+"</td>";
	html += "<td>"+sobrenomehtml+"</td>";
	html += "<td>"+cpfhtml+"</td>";
	html += "<td>"+telefonehtml+"</td>";
	html += "<td>"+enderecohtml+"</td>";
	html += "</tr>";
	$("#registros").html($("#registros").html()+html);



	$(".campo").val("");


	alert("Cadastro concluido!")

	document.getElementById("nome").focus();
}