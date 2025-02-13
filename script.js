function adicionar() {
    let tarefa = document.getElementById("tarefa").value;
    let dataHora = document.getElementById("dataHora").value;
    let diaSemana = document.getElementById("diaSemana").value;
    let prioridade = document.querySelector('input[name="prioridade"]:checked').value;

    if (tarefa == '' || dataHora == '' || diaSemana == '' || prioridade == '') {
        alert('Preencha todos os campos!');
        return;
    } 

    let mensagem = `📑 Tarefa: ${tarefa} 
    ⌚ Data e Hora: ${dataHora} 
    📅 Dia da Semana: ${diaSemana} 
    📍 Prioridade: ${prioridade}`;

    let novaTarefa = document.createElement("div");
    novaTarefa.className = "novaTarefa";
    novaTarefa.innerText = mensagem;

    document.getElementById("tarefas").appendChild(novaTarefa);

    let remover = document.createElement("button");
    remover.className = "remover";
    remover.innerText = "Remover";
    remover.onclick = function () {
        removerTarefa(novaTarefa);
    };

    novaTarefa.appendChild(remover);

    document.getElementById("tarefa").value = '';
    document.getElementById("dataHora").value = '';
    document.querySelector('input[name="prioridade"]:checked').checked = false;
}

function removerTarefa(tarefa) {
    tarefa.remove();
}


