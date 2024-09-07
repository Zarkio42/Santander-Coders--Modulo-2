const rl = require('readline-sync');

let tarefas = [
    { id: 1, descricao: 'Comprar leite' },
    { id: 2, descricao: 'Estudar JavaScript' },
    { id: 3, descricao: 'Fazer exercícios' }
];

// Função para editar a tarefa
function editarTarefa(tarefas, id, tarefaEditada) {
    const tarefa = tarefas.find(tarefa => tarefa.id === id);
    
    tarefa.descricao = tarefaEditada;
    
    return "Tarefa editada com sucesso."
}


export function novaTarefa(tarefas) {
let idTarefa = rl.question(`Informe o índice da terefa que deseja editar:`)
    const id = parseInt(idTarefa);
    
    //Verificar se o valor digitado é válido
    if (isNaN(id)) {
        console.log('ID inválido. Por favor, insira um número.');
        editarTarefa(); // Repetir solicitação em caso de erro

    } else {

        const tarefa = tarefas.find(tarefa => tarefa.id === id); //verifica se a tarefa existe baseado no índice.
        if (!tarefa) {
            console.log('Tarefa não encontrada.');
            editarTarefa(); // Repetir solicitação se o ID for inválido
        
        }else {
            console.log(`Descrição da tarefa: ${tarefa.descricao}`);
           let tarefaEditada = rl.question(`Digite a nova descrição da tarefa:`)
                if (tarefaEditada === '') {
                    console.log('Tarefa inválida. Por favor, insira um valor válido.');
                    editarTarefa(); // Repetir solicitação se o nome for inválido
                } else {
                    const mensagem = editarTarefa(tarefas, id, tarefaEditada);
                    console.log(`${mensagem}`);
                    console.log('Tarefas atuais:');
                    tarefas.forEach(tarefa => console.log(`ID: ${tarefa.id}, Descrição: ${tarefa.descricao}`));
                }

        }
    }

}
