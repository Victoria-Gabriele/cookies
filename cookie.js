document.addEventListener('DOMContentLoaded', function() { 
  const msgCookies= document.getElementById('cookies-msg');
  const aceitocookies = document.getElementById('aceitocookies');
  //rá mostrar a mensagem do cookies
  function mostrarCookies(){
    msgCookies.classList.add('mostrar')
  }
  //irá esconder a mensagem do cookies
  function esconderCookies(){
    msgCookies.classList.remove('mostrar')
  }
  //Mostrar a mensagem por um tempo
  mostrarCookies();
     //Adicionar evento do clique ao botâo
  aceitocookies.addEventListener('click', function() {
    esconderCookies();
  });
})

