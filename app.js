// JQuery & Select2
$(document).ready(function () {
  $(".campo-estado").select2({
    placeholder: "Estado",
    allowClear: true,

    // Traduz mensagem ao não encontrar nada.
    language: {
      noResults: function () {
        return "Nenhum resultado encontrado.";
      },
    },
  });

  $(".campo-municipio").select2({
    placeholder: "Munícipio",
    allowClear: true,

    // Traduz mensagem ao não encontrar nada.
    language: {
      noResults: function () {
        return "Nenhum resultado encontrado.";
      },
    },
  });
});

// URL da API IBGE para pegar estados
const urlEstados =
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

var urlMunicipios =
  // UF vai ser o select do usuário
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios";

// Obtém o elemento do HTML onde os estados serão inseridos
var selectEstados = document.getElementById("campoEstado");
var selectMunicipios = document.getElementById("campoMunicipio");
var option;

// Faz uma requisição à API para obter os dados dos estados
fetch(urlEstados)
  .then((response) => {
    // Verifica se a resposta da requisição está ok (status 200)
    if (!response.ok) {
      throw new Error("Erro ao obter os dados da API");
    }
    // Se a resposta estiver ok, retorna os dados como JSON
    return response.json();
  })
  .then((data) => {

    // Para cada estado retornado pela API, cria uma opção e a adiciona ao elemento select
    data.forEach((estado) => {
      option = document.createElement("option");
      option.textContent = estado.nome;
      option.setAttribute("data-sigla", estado.sigla);
      selectEstados.appendChild(option);
    });
  })
  .catch((error) => {
    // Se ocorrer algum erro durante a requisição dos dados
    console.error("Ocorreu um erro ao buscar os dados:", error);
  });

function fetchMunicipios(siglaEstadoSelecionado) {
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${siglaEstadoSelecionado}/municipios`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao carregar municípios');
      }
      return response.json();
    })
    .then((data) => {
      selectMunicipios.innerHTML = "";
      let contadorMunicipios = 0
      console.log("===============================")

      data.forEach((municipio) => {
        const option = document.createElement("option");
        option.textContent = municipio.nome;
        console.log("Nome do", contadorMunicipios + "º municipio:", municipio.nome)
        selectMunicipios.appendChild(option);
        contadorMunicipios++;
      });
      console.log("===============================")  
    })
    .catch((error) => {
      console.error(error.message);
    });
}

$("#campoEstado").change(function () {
  var estadoSelecionado = $(this).val();
  var siglaEstadoSelecionado = $("#campoEstado option:selected").data("sigla");
  console.log("Sigla do estado selecionado:", siglaEstadoSelecionado)

  if (estadoSelecionado !== "") {
    fetchMunicipios(siglaEstadoSelecionado);
  } else {
    console.log("Selecione um estado");
  }
});

// Executa somente após a página ter sido totalmente carregada
document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.querySelector(".checkbox");
  var checkBoxInput = document.getElementById("checkBox");
  var textoCheckIn = document.getElementById("textoCheckIn");

  // Lógica para quando o usuário clicar na checkbox, liberar o uso da caixa Check-out
  checkbox.addEventListener("change", function () {
    if (!checkbox.checked) {
      checkBoxInput.classList.add("btn-disabled");
      checkBoxInput.style.display = "none";
      textoCheckIn.textContent = "Check-out?";
    } else {
      checkBoxInput.style.removeProperty("display");
      checkBoxInput.classList.remove("btn-disabled");
      textoCheckIn.textContent = "Check-out";
    }
  });
});

// Enviar pro Whatsapp formulário
function enviaWhatsapp() {
  const numeroCelular = "+5569992974079";
  const mensagem = "...";

  const whatsappLink = "https://wa.me/" + numeroCelular;

  console.log(whatsappLink);
}

// Previne botão Reservar de executar qualquer função
document.addEventListener("DOMContentLoaded", function () {
  var submitButton = document.querySelector('button[type="submit"]');

  if (submitButton) {
    submitButton.addEventListener("click", function (event) {
      event.preventDefault(); // Evita o comportamento padrão de envio do formulário
      console.log("Botão submit clicado, mas o formulário não será enviado.");
    });
  } else {
    console.error("Botão submit não encontrado.");
  }
});

// Função para fechar o alert
document
  .getElementById("fecharReservar")
  .addEventListener("click", function () {
    document.getElementById("alertReservar").close(); // Fecha o alert
  });

// Impedir o envio do formulário ao clicar no botão "Fechar"
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o comportamento padrão de envio do formulário
});
