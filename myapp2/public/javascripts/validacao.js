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
function validacaoFuncionario(){
	var salario= $("#salario").val()
	var nome= $("#nome").val()
	var telefone = $("#telefone").val()
	var endereco = $("#endereco").val()
	var email = $("#email").val()
	if(nome==""||telefone==""||endereco==""||email==""||salario==""){
		alert("Não deixe espaços em branco!")
		return false;
	}else if (isNaN(telefone)&&isNaN(salario)){
		alert("Telefone e salário devem ser números!")
		return false;
	}else{
		return true;
	}
}
function validacaoProduto(){
	var nome= $("#nome").val()
	var descricao= $("#descricao").val()
	var valorcompra = $("#valorcompra").val()
	var valorvenda = $("#valorvenda").val()
	var quantidade = $("#quantidade").val()
	if(nome==""||descricao==""||valorcompra==""||valorvenda==""||quantidade==""){
		alert("Não deixe espaços em branco!")
		return false;
	}else if (isNaN(quantidade)&&isFloat(valorcompra)&&isFloat(valorvenda)){
		alert("Quantidade deve ser inteiro, valor de compra deve ser float e valor de venda deve ser float!")
		return false;
	}else{
		return true;
	}
}

function validacaoVenda(){
	var quantidade = $("#quantidade").val()
	var idcliente = $("#idcliente").val()
	var idfuncionario = $("#idfuncionario").val()
	var idproduto = $("#idproduto").val()
	var datavenda = $("#datavenda").val()
	if(datavenda==""||idcliente==""||idfuncionario==""||idproduto==""){
		alert("Não deixe espaços em branco!")
		return false;
	}else if (isNaN(idcliente)||isNaN(idfuncionario)||isNaN(idproduto)||datavenda.length!=10){
		alert("Os identificadores deverão ser números inteiros e a data deve ter o formato : YYYY-MM-DD!")
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

function validacaoClienteBusca(){
	var nomeclientebusca = $("#nomeclientebusca").val()
	if(nomeclientebusca==""){
		alert("Digite o nome do cliente para buscar!")
		return false;
	}else{
		return true;
	}
}
function validacaoProdutoBusca(){
	var nomeprodutobusca = $("#nomeprodutobusca").val()
	if(nomeprodutobusca==""){
		alert("Digite o nome do produto para buscar!")
		return false;
	}else{
		return true;
	}
}
function validacaoFuncionarioBusca(){
	var nomefuncionariobusca = $("#nomefuncionariobusca").val()
	if(nomefuncionariobusca==""){
		alert("Digite o nome do funcionário para buscar!")
		return false;
	}else{
		return true;
	}
}