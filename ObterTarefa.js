function ObterTarefa(lista, id) {
    for (let tarefa of lista) {
        if (tarefa.id == id) {
            console.log(`Tarefa: ${tarefa.descricao} \nTarefa Id: ${tarefa.id}`);
            return; 
        }
    }
    console.log("Tarefa não encontrada");
}

module.exports = ObterTarefa;
