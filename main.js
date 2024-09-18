const prompt = require('prompt-sync')();
const listarTarefas = require('./listarTarefas');
const ObterTarefa = require('./ObterTarefa');


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
                adicionarTarefa()
                break;

            case '2':
                console.log("Editando tarefa...");
                editarTarefa()
                break;

            case '3':
                console.log("Removendo tarefa...");
                removerTarefa()
                break;

            case '4':
                ObterTarefa();
                break;

            case '5':
                console.log("Listando todas as tarefas...");
                listarTarefas()
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