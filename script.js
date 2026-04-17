document.getElementById("FormSangue").addEventListener("submit", function (e) {
    e.preventDefault();



    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let sangue = document.getElementById("TipoSanguineo").value;
    let telefone = document.getElementById("telefone").value.trim();
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

   

    if (nome.split(" ").length < 2)return alert("Por favor, digite seu nome e sobrenome."); 
    if (!email.includes("@")) return alert("Email invalido");
    if (idade < 16) return alert("Sua idade tem que ser maior de 16");
    if (peso < 50) return alert("Seu peso tem que ser maior de 50Kg");
    if (sangue === "") return alert("Escolha um tipo de sangue");
    if (!/^\d+$/.test(telefone)) return alert("O telefone deve conter apenas números (sem espaços ou traços).");
    if (cidade === "" && estado === "") return alert("Adicione informações em todos os campos");
    
    document.getElementById("resultado").innerHTML = "Formulário feito com sucesso!";


});