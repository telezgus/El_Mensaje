
      var n = document.getElementById('boton-formulario');
      var nombreVal = document.getElementById('recipient-nombre');
      var apellidoVal = document.getElementById('recipient-apellido');
      var correoVal = document.getElementById('recipient-correo');
      var aclaraciones = document.getElementById('message-text');
      n.disabled= 'true';


      
      apellidoVal.onfocus = validaNombre;
      correoVal.onfocus = validaApellido;
      aclaraciones.onfocus = validaCorreo;

      n.onclick = formulario;
      console.log(n)

      var nombre
      var apellido
      var correo
      var resp
      
      console.log(nombre);
      console.log(nombreVal.value);
      

  
      function formulario(){  
       nombre = document.getElementById('recipient-nombre').value;
       apellido = document.getElementById('recipient-apellido').value;
       correo = document.getElementById('recipient-correo').value;
       console.log(nombre);
       resp = document.getElementById('respuesta');
       console.log(resp);
       resp.textContent = "Hola " + nombre + " " + apellido + " te anotaste en la subasta. Te enviamos un mail a: " + correo + " con todos los detalles para partichipar";
       console.log(resp.textContent)

      }
      
      function validaNombre(){
        
        var usuarioValor = nombreVal.value.trim();
        if(!usuarioValor){
            
            nombreVal.className = 'form-control is-invalid'
            console.log(nombreVal)
        }else{
          nombreVal.className = 'form-control is-valid'
        }

      }

      function validaApellido(){
        
        var usuarioValor = apellidoVal.value.trim();
        if(!usuarioValor){
            
            apellidoVal.className = 'form-control is-invalid'
            console.log(nombreVal)
        }else{
            apellidoVal.className = 'form-control is-valid'
        }

      }

        function validaCorreo(){
          var emailValor = correoVal.value.trim();
        if(!emailValor){
            
            correoVal.className = 'form-control is-invalid'
            console.log(nombreVal)
        }else if(!validaEmail(emailValor)) {
            correoVal.className = 'form-control is-invalid'
            console.log(correoVal)
        }else {
          n.disabled= false;
          correoVal.className = 'form-control is-valid';
          
          }
        }
        const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
        }