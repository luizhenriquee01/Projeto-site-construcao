$(document).ready(function () {
  $('#telefone').mask('(00) 00000-0000');
  $('#fullName').mask('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', {
    translation: { A: { pattern: /[a-zA-Z\s]/ } },
  });
  $('form').validate({
    rules: {
      telefone: {
        required: true,
      },
      mail: {
        email: true,
        required: true,
      },
      fullName: {
        required: true,
      },
    },
    messages: {
      fullName: 'Por favor, insira o seu Nome completo',
      mail: {
        required: 'Por favor, insira seu e-mail.',
        email: 'Por favor, insira um e-mail válido.',
      },
      telefone: 'Por favor, insira o seu Telefone',
    },
  });
});
