function ObterTarefa(arrayTarefas, id) {
    for (tarefa of arrayTarefas) {
        if (tarefa.id == id) {
            return console.log(`Tarefa: ${tarefa.nome} \n Tarefa Id: ${tarefa.id}`);
        }
    }

}

export default ObterTarefa();