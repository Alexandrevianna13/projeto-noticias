const BotaoAbrir = document.querySelector(".header-mobile > button")
const BotaoFechar = document.querySelector(".header-mobile nav button")

const body = querySelector("body")
const nav = querySelector(".header-mobile nav")

BotaoAbrir.addEventListener("click", )

function abrirMenu() {
  body.classList.add("escurecer")
  nav.classList.add("abrir")

}

function fecharMenu() {
  body.classList.remove("escurecer")
  nav.classList.remove("abrir")
}
