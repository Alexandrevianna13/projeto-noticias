const BotaoAbrir = document.querySelector(".header > button")
const BotaoFechar = document.querySelector(".header nav button")

const body = querySelector("body")
const nav = querySelector(".header .mobile")

BotaoAbrir.addEventListener("click", )

function abrirMenu() {
  body.classList.add("escurecer")
  nav.classList.add("abrir")

}

function fecharMenu() {
  body.classList.remove("escurecer")
  nav.classList.remove("abrir")
}
