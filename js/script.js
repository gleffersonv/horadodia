function loading(){
  let msg = window.document.querySelector('#msg')
  let img = window.document.querySelector('#image')
  let data = new Date()
  let hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12){
    // BOM DIA
    img.src = './img/manha.png'
    window.document.body.style.background = '#ae4f15'
  }else if (hora >= 12 && hora <= 18){
    // BOA TARDE
    img.src = './img/tarde.png'
    window.document.body.style.background = '#4e5b24'
  }else {
    // BOA NOITE
    img.src = './img/noite.png'
    window.document.body.style.background = '#664868'
  }
}

