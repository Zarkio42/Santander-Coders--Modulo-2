const prompt = require('prompt-sync')();
const adicionarTarefa = require('./adicionarTarefa');
const ObterTarefa = require('./ObterTarefa');
const listarTarefas = require('./listarTarefas');
const editarTarefa = require('./scripts/editarTarefa');

let id = 1;
let listaDeTarefas = [];

function Main() {
    console.log("----- Bem Vindo ao Agendador de Tarefas -----\n");

    const mensagemInicial = "Escolha uma opção para prosseguir: \n 1 - Adicionar Nova Tarefa \n 2 - Editar Tarefa \n 3 - Remover Tarefa \n 4 - Obter Tarefa Específica \n 5 - Listar Todas as Tarefas \n 6 - Sair";

    console.log(mensagemInicial);

    let option;
    while (option !== '6') { 
        option = prompt("Digite sua opção: ");
        
        switch (option) {
            case '1':
                console.log("Adicionando nova tarefa...");
                const descricao = prompt("Descrição da tarefa: ");
                adicionarTarefa(listaDeTarefas, descricao, id++);                
                break;

            case '2':
                console.log("Editando tarefa...");
                editarTarefa(tarefas);
                break;

            case '3':
                console.log("Removendo tarefa...");
                
                break;

            case '4':
                const tarefaId = prompt("Digite o ID da tarefa: ");
                ObterTarefa(listaDeTarefas, tarefaId);
                break;

            case '5':
                console.log("Listando todas as tarefas... \n");
                listarTarefas(listaDeTarefas);
                break;

            case '6':
                console.log("Saindo.");
                break;

            default:
                console.log("Opção inválida, tente novamente.");
                break;
        }

        console.log("\n" + mensagemInicial);
    }
}

Main();