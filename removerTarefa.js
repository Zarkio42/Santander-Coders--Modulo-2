function removerTarefa(lista, id){
    console.log(`Tarefa '${lista[id]}' removida com sucesso!`)
    lista.splice(id - 1, 1);
}

module.exports = removerTarefa;