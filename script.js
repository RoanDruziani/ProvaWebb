function validarEtapa01() {
  let formularioValido = true;
  //input
  const nome = document.getElementById("txt-nome");
  const sobrenome = document.getElementById("txt-sobrenome");
  const nomeAnimal = document.getElementById("txt-nomeAnimal");
 
  //selec

  const tipoAnimal = document.getElementById("select-tipo-animal");
  const porteAnimal = document.getElementById("select-porteAnimal");
 
  //input error

  if (nome.value === "") {
    nome.style.borderBottom = "2px solid red";
    nome.className = "color-text-red-error";
    formularioValido = false;
  }
  if (sobrenome.value === "") {
    sobrenome.style.borderBottom = "2px solid red";
    sobrenome.className = "color-text-red-error";
    formularioValido = false;
  }
  if (nomeAnimal.value === "") {
    nomeAnimal.style.borderBottom = "2px solid red";
    nomeAnimal.className = "color-text-red-error";
    formularioValido = false;
  }
  

  //select error

  if (tipoAnimal.value === "") {
    tipoAnimal.style.borderBottom = "2px solid red";
    tipoAnimal.style.color = "red";
    formularioValido = false;
  }
  if (porteAnimal.value === "") {
    porteAnimal.style.borderBottom = "2px solid red";
    porteAnimal.style.color = "red";
    formularioValido = false;
  }

  if (formularioValido) {

    localStorage.setItem("nome", String(nome.value));
    localStorage.setItem("sobrenome", String(sobrenome.value));
    localStorage.setItem("nomeAnimal", String(nomeAnimal.value));
    localStorage.setItem("tipoAnimal", String(tipoAnimal.value));
    localStorage.setItem("porteAnimal", String(porteAnimal.value));
    
    document.location.href = "pagina03.html";
  
    // Limpar estilos de erro
    // if (nome.value !== "") {
    //   nome.style.border = "unset";
    // }
  }
}




function validarEtapa02(){

  let formularioValido2 = true
  
  const responsavel = document.getElementById("txt-responsavel");
  const cep = document.getElementById("txt-cep");
  const Bairro = document.getElementById("txt-Bairro");
  const rua = document.getElementById("txt-rua");
  const numero = document.getElementById("txt-numero");
  const NumeroTelefone = document.getElementById("txt-NumeroTelefone");
  const email = document.getElementById("txt-email");
  
  //selec

  const estado = document.getElementById("select-estado");
  const cidade = document.getElementById("select-cidade");

  if (responsavel.value === "") {
    responsavel.style.borderBottom = "2px solid red";
    responsavel.className = "color-text-red-error";
    formularioValido2 = false;
  }
  if (cep.value === "") {
    cep.style.borderBottom = "2px solid red";
    cep.className = "color-text-red-error";
    formularioValido2 = false;
  }
  if (Bairro.value === "") {
    Bairro.style.borderBottom = "2px solid red";
    Bairro.className = "color-text-red-error";
    formularioValido2 = false;
  }
  if (rua.value === "") {
    rua.style.borderBottom = "2px solid red";
    rua.className = "color-text-red-error";
    formularioValido2 = false;
  }
  if (numero.value === "") {
    numero.style.borderBottom = "2px solid red";
    numero.className = "color-text-red-error";
    formularioValido2 = false;
  }
  if (NumeroTelefone.value === "") {
    NumeroTelefone.style.borderBottom = "2px solid red";
    NumeroTelefone.className = "color-text-red-error";
    formularioValido2 = false;
  }
  if (email.value === "") {
    email.style.borderBottom = "2px solid red";
    email.className = "color-text-red-error";
    formularioValido2 = false;
  }

  //select

  if (estado.value === "") {
    estado.style.borderBottom = "2px solid red";
    estado.style.color = "red";
    formularioValido2 = false;
  }
  if (cidade.value === "") {
    cidade.style.borderBottom = "2px solid red";
    cidade.style.color = "red";
    formularioValido2 = false;
  }  


  if (formularioValido2) {

    localStorage.setItem("responsavel", String(responsavel.value));
    localStorage.setItem("cep", String(cep.value));
    localStorage.setItem("estado", String(estado.value));
    localStorage.setItem("cidade", String(cidade.value));
    localStorage.setItem("rua", String(rua.value));
    localStorage.setItem("numero", String(numero.value));
    localStorage.setItem("numeroTelefone", String(NumeroTelefone.value));
    localStorage.setItem("email", String(email.value));
    
    document.location.href = "pagina04.html"
  
  }
};

