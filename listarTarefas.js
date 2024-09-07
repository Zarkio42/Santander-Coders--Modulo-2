function listarTarefas(listaDeTarefas, voltarMenu = false) {
    if (listaDeTarefas.length === 0) {
      console.log('Nenhuma tarefa.');
    } else {
      console.log('Tarefas: ');
      listaDeTarefas.forEach(tarefa => console.log(`${tarefa.id}: ${tarefa.descricao} \n`));
    }
    if (voltarMenu) iniciar();
  }

module.exports = listarTarefas;