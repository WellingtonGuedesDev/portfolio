const header = document.querySelector('#header')
const headerHight = header.clientHeight

window.addEventListener('scroll', function() {
    let posicaoScrollPagina = window.scrollY.toFixed(0);
    
    if (posicaoScrollPagina > 20) {
        header.style.backgroundColor = "#fff"
        header.style.boxShadow = "0 1px 2px 0 rgb(0 0 0 / 0.05)"
        header.style.transition = "all 1s ease"
    } else {
        header.style.backgroundColor = "#fff"
        header.style.boxShadow = "none"
    }
  });
  