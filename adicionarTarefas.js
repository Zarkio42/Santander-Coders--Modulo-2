let id = 1;
let tarefas = [];
function adicionarTarefa() {
  perguntar('Descrição da tarefa: ', (descricao) => {
      tarefas.push({ id: id++, descricao });
      console.log('Tarefa adicionada!');
      iniciar();
  });
}