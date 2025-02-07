function adicionar() {
    let tarefa = document.getElementById('tarefa').value;
    let dataHora = document.getElementById('dataHora').value;
    let diaSemana = document.getElementById('diaSemana').value;
    let prioridade = document.querySelector('input[name="prioridade"]:checked').value;

    let mensagem = `Tarefa: ${tarefa} | Data e Hora: ${dataHora} | Dia da Semana: ${diaSemana} | Prioridade: ${prioridade.value}`;

    let novaTarefa = document.createElement('div');
    novaTarefa.innerText = mensagem;

    document.getElementById('tarefas').appendChild(novaTarefa);

    let concluir = document.createElement('input');
    concluir.type = 'checkbox';
    concluir.onclick = function() {
        concluirTarefa(novaTarefa, concluir);
    };

    let remover = document.createElement('button');
    remover.innerText = 'Remover';
    remover.onclick = function() {
        removerTarefa(novaTarefa);
    };

    novaTarefa.appendChild(concluir);
    novaTarefa.appendChild(remover);

    document.getElementById("tarefas").appendChild(novaTarefa);
}

function removerTarefa(tarefa) {
    tarefa.remove();
}

function concluirTarefa(tarefa, checkbox) {
    if (checkbox.checked) {
        tarefa.style.textDecoration = 'line-through';
        document.getElementById('tarefas-concluidas').appendChild(tarefa);
    } else {
        tarefa.style.textDecoration = 'none';
        document.getElementById('tarefas').appendChild(tarefa);
    }
}