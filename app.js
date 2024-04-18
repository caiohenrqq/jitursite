// API IBGE para pegar estados
fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
  .then(response => response.json())
  .then(data => {
    let campoLocais = document.getElementById('campoLocais');

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
  $('.campoLocais').select2({
    placeholder: "Selecione um lugar",
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
document.addEventListener('DOMContentLoaded', function() {
  var checkbox = document.querySelector('.checkbox');
  var checkBoxInput = document.getElementById('checkBox');

  // Lógica para quando o usuário clicar na checkbox, liberar o uso da caixa Check-out.
  checkbox.addEventListener('change', function() {
    if (!checkbox.checked) {
      checkBoxInput.classList.add('btn-disabled');
    } else {
      checkBoxInput.classList.remove('btn-disabled');
    }
  });
});




