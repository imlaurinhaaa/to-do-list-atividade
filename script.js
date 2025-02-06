function adicionar(tarefa){
    let tarefa = document.getElementById('tarefa').value;
    let datahHora = document.getElementById('data-hora').value;
    let prioridade = document.getElementById('prioridade').value;

    let mensagem = 'Tarefa: ' + tarefa + '\nData e Hora: ' + datahHora + '\nPrioridade: ' + prioridade;

    document.getElementById("resposta").innerText = mensagem;
}