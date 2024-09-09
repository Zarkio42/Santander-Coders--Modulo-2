function listarTarefas(listaDeTarefas) {
    if (listaDeTarefas.length === 0) {
      console.log('Nenhuma tarefa.');
    } else {
      console.log('Tarefas: \n');
      listaDeTarefas.forEach(tarefa => console.log(`${tarefa.id}: ${tarefa.descricao} \n`));
    }
  }

module.exports = listarTarefas;