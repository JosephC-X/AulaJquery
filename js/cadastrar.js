var botaoCadastro = document.querySelector('#botaoCadastro');
botaoCadastro.addEventListener('click', function (e) {
    var dados = {
        nome: document.querySelector('#nome').value,
        contato: document.querySelector('#contato').value,
        data: document.querySelector('#data').value,
        hora: document.querySelector('#hora').value,
        cep: $('#cep').val(),
        logradouro: $('#logradouro').val(),
        numero: $('#numero').val(),
        bairro: $('#bairro').val(),
        cidade: $('#cidade').val(),
        uf: $('#uf').val(),

    }
    fetch('https://api-aluno.meuapp.net.br/api/eventos', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(function (resposta) {
            window.location.href = 'listar.html';
        })
        .catch(function (error) {
            alert('Deu ruim');
            console.log(error)
        })
});
$('#cep').on('change', function () {
    var cep = $(this).val();
    var rota = `https://viacep.com.br/ws/${cep}/json/`
    $.ajax({
        url: rota,
        success: function (resposta) {
            $('#bairro').val(resposta.bairro);
            $('#logradouro').val(resposta.logradouro);
            $('#numero').val(resposta.numero);
            $('#cidade').val(resposta.localidade);
            $('#uf').val(resposta.uf);
        }
    })
})