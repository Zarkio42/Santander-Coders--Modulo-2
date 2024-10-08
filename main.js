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
<<<<<<< HEAD
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
=======
                try {
                    console.log("Adicionando nova tarefa...\n");
                    const descricao = prompt("Descrição da tarefa: ");
                    if (!descricao) throw new Error("Descrição não pode ser vazia.");
                    adicionarTarefa(listaDeTarefas, descricao, id++);
                } catch (error) {
                    console.error("Erro ao adicionar tarefa: " + error.message);
                }
                break;

            case '2':
                try {
                    console.log("Editando tarefa...\n");
                    const idEditar = parseInt(prompt("Digite o Id da tarefa que deseja editar: "));
                    if (isNaN(idEditar) || idEditar <= 0) throw new Error("ID inválido.");
                    const novoConteudo = prompt("Edite o nome da tarefa: ");
                    if (!novoConteudo) throw new Error("O conteúdo da tarefa não pode ser vazio.");
                    editarTarefa(listaDeTarefas, idEditar, novoConteudo);
                } catch (error) {
                    console.error("Erro ao editar tarefa: " + error.message);
                }
                break;

            case '3':
                try {
                    const idRemover = parseInt(prompt("Digite o ID da tarefa: "));
                    if (isNaN(idRemover) || idRemover <= 0) throw new Error("ID inválido.");
                    removerTarefa(listaDeTarefas, idRemover);
                } catch (error) {
                    console.error("Erro ao remover tarefa: " + error.message);
                }
                break;

            case '4':
                try {
                    const tarefaId = parseInt(prompt("Digite o ID da tarefa: "));
                    if (isNaN(tarefaId) || tarefaId <= 0) throw new Error("ID inválido.");
                    ObterTarefa(listaDeTarefas, tarefaId);
                } catch (error) {
                    console.error("Erro ao obter tarefa: " + error.message);
                }
                break;

            case '5':
                try {
                    console.log("Listando todas as tarefas... \n");
                    listarTarefas(listaDeTarefas);
                } catch (error) {
                    console.error("Erro ao listar tarefas: " + error.message);
                }
>>>>>>> c2ba68b39f94100904d75dbe45a8b6dcd011b875
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
