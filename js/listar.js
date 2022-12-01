fetch('https://api-aluno.meuapp.net.br/api/eventos', {
    method: 'GET'
})
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function (dados) {
        dados.forEach(function (item) {
            document.querySelector('#dados').innerHTML += `
            <tr>
            <td><button class="btn btn-danger apagar" data-id="${item.id}">Apagar</button></td>
            <td>${item.nome}</td>
            <td>${item.contato}</td>
            <td>${item.data} - ${item.hora}</td>
            <td>${item.endereco?.logradouro}, ${item.endereco?.numero}</td>
            </tr>
            `;
        });
        adiconarEventoApagar();
    })

function adiconarEventoApagar() {
    $('.apagar').on('click', function () {
        var id = $(this).data('id');
        var url = `https://api-aluno.meuapp.net.br/api/eventos/${id}`;
        console.log(url)
        $.ajax({
            url: url,
            method: 'DELETE',
            success: function (resposta) {
                window.location.reload();
            }
        })
    })
}