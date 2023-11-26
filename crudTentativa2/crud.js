//cria um array pra guardar todos os usuários que foram cadastrados
let usuarios = [];

//CRIAÇÃO e ATUALIZAÇÃO
function createOrUpdate() {
  //Coletam as referencias nos inputs
  const nomeEntrada = document.getElementById("nome");
  const idadeEntrada = document.getElementById("idade");

  //coleta e armazena as informações nos imputs
  const nome = nomeEntrada.value;
  const idade = idadeEntrada.value;

  //Só executa se ambos os campos estiverem preenchidos
  if (nome && idade) {
    const usuario = { nome, idade };
    //se tiverem preenchidos, cria um objeto com ambas as infos
    const indice = usuarios.findIndex((u) => u.nome === nome);
    //*(u) => u.name === nome*  é uma função de teste pra verificar se tem algum nome igual ao nome digitado
    //findIndex retorna o índice do elemento quando a função achar um elemento que torna ela verdadeira. Se não achar,  vai retornar -1.

    //Se o index for diferente de -1, significa que existe o nome
    if (indice !== -1) {
      // Atualiza o array com as informações guardadas no usuario no indice encontrado ppor findIndex
      usuarios[indice] = usuario;
    } else {
      //Se não, então não existe o nome, então adiciona esse novo usuário ao array usuarios
      usuarios.push(usuario);
    }
    //Atualiza a exibição da lista de usuários
    displayDeUsuarios();
    //Limpa os campos do formulário
    clearForm();
  }
}

function deleteUsuarios(indice) {
  //remove apenas 1 usuário de acordo com o índice passado
  usuarios.splice(indice, 1);
  //atualiza a lista de usuários
  displayDeUsuarios();
}

function displayDeUsuarios() {
  //Pega a referencia da Id
  const listaDeUsuarios = document.getElementById("listaUsuarios");
  //começa mandando para o container uma espaço vazio
  listaDeUsuarios.innerHTML = "";

  //foreach intera a cada usuario com cada indice do array usuarios
  usuarios.forEach((usuario, indice) => {
    //cria um novo elemento de lista <li>
    const listaItem = document.createElement("li");
    //define o conteudo do nome item da lista de usuarios. Esse texto vai ser adicionado entre as tags <li></li> com a ajuda de textContent
    listaItem.textContent = `${usuario.nome}, ${usuario.idade} anos de idade `;

    //BOTÃO PARA DELETE
    //cria um novo elemento de botão
    const botaodeDelete = document.createElement("button");
    //define o texto dentro do botão
    botaodeDelete.textContent = "Delete";
    //adiciona uma classe ao botão pra que seja usada pra ser modificada pelo arquivo css
    botaodeDelete.className = "delete-btn";
    //aqui adiciona o evento que acontece ao clicar no botão
    botaodeDelete.onclick = () => deleteUsuarios(indice);

    //adiciona o botão feito a cada item de lista criado
    listaItem.appendChild(botaodeDelete);
    //adiciona cada elemento de lista a lista completa de usuários
    listaDeUsuarios.appendChild(listaItem);
  });
}

function clearForm() {
  //Aqui acessa o elemento pelo id, e usa o método reset() que restaura elementos de fomulario
  document.getElementById("formularioCRUD").reset();
}

// Exemplo de dados iniciais
usuarios = [
  { nome: "Emerson", idade: 29 },
  { nome: "Juan", idade: 24 },
];

// Exibir os usuários iniciais
displayDeUsuarios();
