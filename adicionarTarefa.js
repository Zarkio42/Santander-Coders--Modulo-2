function adicionarTarefa(lista, descricao, id) {
    lista.push({ id: id++, descricao });
    console.log('Tarefa adicionada!');
}

module.exports = adicionarTarefa;
