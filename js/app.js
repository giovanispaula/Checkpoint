function createCard() {
  //Criando função para clique de botão

  let title = document.getElementById('title').value // armazenando dados do input dentro de variavel
  let description = document.getElementById('description').value // armazenando dados do input dentro de variavel
  let urlImg = document.getElementById('url-img').value // armazenando dados do input dentro de variavel

  let cardSection = document.querySelector('.grid-cards') // Criando variável para receber o grid-container

  // Adicionando HTML à div grid-container
  cardSection.innerHTML += `
  <div> <img src="${urlImg}">
  <h2>${title}</h2>
  <p>${description}<p> </div>`

  document.getElementById('form').reset() //resetar o formulário.
}

let btnHide = document.getElementById('btnHide')
btnHide.addEventListener('click', event => {
  event.preventDefault(),
    (document.getElementById('addCardContainer').style.display = 'none') //Função para remover o pop-up de adicionar imagens
})

let btnShow = document.getElementById('btnShow')
btnShow.addEventListener('click', event => {
  event.preventDefault(),
    (document.getElementById('addCardContainer').style.display = 'block') //função para aparecer o pop-up de adicionar imagens
})
