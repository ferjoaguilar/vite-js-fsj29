import Swal from 'sweetalert2'
import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Formulario de contacto</h1>

    <form id="contact-form" class="contact-form">

      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name">
      </div>

      <div class="form-group">
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" name="email">
      </div>

      <div class="form-group">
        <label for="message">Mensaje:</label>
        <textarea id="message" name="message" rows="4"></textarea>
      </div>

      <button type="submit" class="submit-button">Enviar</button>

    </form>

    <div class="event-message" id="form-message">
      Complete el formulario y haga clic en "Enviar".
    </div>
  </div>
`

const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('Formulario enviado');

  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {

    Swal.fire({
      title: 'Error en el formulario',
      text: 'Por favor, complete todos los campos.',
      icon: 'error',
      confirmButtonText: 'Volver a intentar'
    })

    return;
  }

  form.reset();


})
