function validarSenha(){
   const login = "roberto.coelho@ving.br";
   const password = "olavododesenhofrozen";

   var user = document.getElementById('email').value;
   var passw = document.getElementById('senha').value;

   
   if (login != user  && password != passw) {
      alert("Preencha os campos corretamente");
      window.location.href("login.html"); 
   }
   else if (login == user  && password == passw) {
      window.location.replace("dash.html"); 
   }
}
       