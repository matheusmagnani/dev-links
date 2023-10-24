function toggleMode() {
  const html= document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  
  if(html.classList.contains("light")){
    img.setAttribute("alt", "Homem com blusa preta")
    img.setAttribute("src", "./assets/avatar2.png")
  }else{
    img.setAttribute("alt", "Homem com blusa preta em preto e branco")
    img.setAttribute("src", "./assets/avatar1.png")
  }

}