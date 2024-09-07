const prompt = require('prompt-sync')();
const adicionarTarefa = require('./adicionarTarefa');
const ObterTarefa = require('./ObterTarefa');
const listarTarefas = require('./listarTarefas');
const removerTarefa = require('./removerTarefa');
const editarTarefa = require('./editarTarefa');

let id = 1;
let listaDeTarefas = [];

function Main() {
    console.log("----- Bem Vindo ao Agendador de Tarefas -----\n");

    const mensagemInicial = "Escolha uma opção para prosseguir: \n 1 - Adicionar Nova Tarefa \n 2 - Editar Tarefa \n 3 - Remover Tarefa \n 4 - Obter Tarefa Específica \n 5 - Listar Todas as Tarefas \n 6 - Sair \n";

    console.log(mensagemInicial);

    let option;
    while (option !== '6') { 
        option = prompt("Digite sua opção: ");
        
        switch (option) {
            case '1':
                console.log("Adicionando nova tarefa...\n");
                const descricao = prompt("Descrição da tarefa: ");
                adicionarTarefa(listaDeTarefas, descricao, id++);              
                break;

            case '2':
                console.log("Editando tarefa...\n");
                const idEditar = parseInt(prompt("Digite o Id da tarefa que deseja editar: "));
                const novoConteudo = prompt("Edite o nome da tarefa: ");
                editarTarefa(listaDeTarefas, idEditar, novoConteudo);
                break;

            case '3':
                const idRemover = parseInt(prompt("Digite o ID da tarefa: "));
                removerTarefa(listaDeTarefas, idRemover);
                break;

            case '4':
                const tarefaId = parseInt(prompt("Digite o ID da tarefa: "));
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