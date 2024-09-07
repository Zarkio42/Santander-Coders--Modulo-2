function editarTarefa(listaTarefas, id, novoConteudo) {
    const tarefa = listaTarefas.find(tarefa => tarefa.id === id);

    if (!tarefa) {
        console.log(`Tarefa com ID ${id} não encontrada.`);
        return;
    }

    tarefa.descricao = novoConteudo;
    console.log("Tarefa editada com sucesso.");
}

module.exports = editarTarefa;