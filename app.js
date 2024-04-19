// API IBGE para pegar estados
fetch('https://servicodados.ibge.gov.br/api/v1/localidades/paises')
  .then(response => response.json())
  .then(data => {
    let campoLocais = document.getElementById('campoPais');

    data.forEach(estado => {
      var option = document.createElement('option');
      option.value = estado.sigla;
      option.textContent = estado.nome;

      campoLocais.appendChild(option);
    });
  })
  .catch(error => {
    console.error('Ocorreu um erro ao buscar os dados: ', error);
  });

// JQuery & Select2
$(document).ready(function () {
  $('.campoPais').select2({
    placeholder: "País",
    allowClear: true,

    // Traduz mensagem ao não encontrar nada.
    language: {
      noResults: function () {
        return 'Nenhum resultado encontrado.';
      }
    }
  });

  $('.campoEstado').select2({
    placeholder: "Estado",
    allowClear: true,

    // Traduz mensagem ao não encontrar nada.
    language: {
      noResults: function () {
        return 'Nenhum resultado encontrado.';
      }
    }
  });

  $('.campoCidade').select2({
    placeholder: "Cidade",
    allowClear: true,

    // Traduz mensagem ao não encontrar nada.
    language: {
      noResults: function () {
        return 'Nenhum resultado encontrado.';
      }
    }
  });
});

// Executa somente após a página ter sido totalmente carregada.
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('.checkbox');
  var checkBoxInput = document.getElementById('checkBox');
  var textoCheckIn = document.getElementById('textoCheckIn');

  // Lógica para quando o usuário clicar na checkbox, liberar o uso da caixa Check-out.
  checkbox.addEventListener('change', function () {
    if (!checkbox.checked) {
      checkBoxInput.classList.add('btn-disabled');
      checkBoxInput.style.display = 'none';
      textoCheckIn.textContent = "Check-out?";
    } else {
      checkBoxInput.style.removeProperty('display');
      checkBoxInput.classList.remove('btn-disabled');
      textoCheckIn.textContent = "Check-out";
    }
  });
});

// Enviar pro Whatsapp formulário
function enviaWhatsapp() {
  const numeroCelular = '+5569992974079';
  const mensagem = '...';

  const whatsappLink = 'https://wa.me/' + numeroCelular;
  
  console.log(whatsappLink);
}

// Previne botão Reservar de executar qualquer função
document.addEventListener('DOMContentLoaded', function() {
  var submitButton = document.querySelector('button[type="submit"]');

  if (submitButton) {
    submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Evita o comportamento padrão de envio do formulário
      console.log('Botão submit clicado, mas o formulário não será enviado.');
    });
  } else {
    console.error('Botão submit não encontrado.');
  }
});

  // Função para fechar o alert
  document.getElementById('fecharReservar').addEventListener('click', function() {
    document.getElementById('alertReservar').close(); // Fecha o modal
  });

  // Impedir o envio do formulário ao clicar no botão "Fechar"
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário
  });



