fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
  .then(response => response.json()) 
  .then(data => console.log(data));

  $(document).ready(function() {
    $('.campoLocais').select2({
      placeholder: "Selecione um lugar",
      allowClear: true
    });
  });
  
