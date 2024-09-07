function listarTarefas(voltarMenu = false) {
    if (tarefas.length === 0) {
      console.log('Nenhuma tarefa.');
    } else {
      console.log('Tarefas:');
      tarefas.forEach(tarefa => console.log(`${tarefa.id}: ${tarefa.descricao}`));
    }
    if (voltarMenu) iniciar();
  }