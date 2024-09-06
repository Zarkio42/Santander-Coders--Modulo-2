function ObterTarefa(arrayTarefas, id) {
    for (let tarefa of arrayTarefas) {
        if (tarefa.id == id) {
            console.log(`Tarefa: ${tarefa.nome} \nTarefa Id: ${tarefa.id}`);
            return; 
        }
    }
    console.log("Tarefa não encontrada");
}

module.exports = ObterTarefa;
