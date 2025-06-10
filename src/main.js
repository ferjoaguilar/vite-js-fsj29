import './style.css'
const app = document.getElementById('app')

const heading = document.createElement('h1')
heading.textContent = 'Hola desde mi projecto de VITE'
heading.style.color = 'blue'
app.appendChild(heading)

const paragraph = document.createElement('p')
paragraph.textContent = 'Contenido del parrafo'
app.appendChild(paragraph)

const image = document.createElement('img')
image.src = 'Link de la imagen'
image.alt = 'Este es una imagen'
app.appendChild(image)

let names = ['Franklin', 'Juan Diego', 'Lesly', 'Luis', 'Dinora']
const randomName = names[Math.floor(Math.random() * names.length)];
const messageContent = `
  <div class="message">1
    <h2>Mensaje de bienvenida</h2>
    <p>Este es un mensaje de bienvenida a tu proyecto VITE. ${randomName}</p>
  </div>
`;

const messageContainer = document.createElement('div')
messageContainer.innerHTML = messageContent;
app.appendChild(messageContainer)

const htmlContentCounter = `
  <div>
    <h2 class="counter-title">Counter</h2>
    <p id="counter-value">4</p>
    <button id="increment-button">Incrementar</button>
    <button id="decrement-button">Decrementar</button>
  </div>
`
const counterDiv = document.createElement('div')
counterDiv.innerHTML = htmlContentCounter;
app.appendChild(counterDiv)

const counterValue = document.getElementById('counter-value')
const incrementButton = document.getElementById('increment-button')
const decrementButton = document.getElementById('decrement-button')


// Inicializar el contador
let counter = 4;

incrementButton.addEventListener('click',() => {
  //console.log('Hola soy un boton')
  counter++
  counterValue.textContent = counter;
  console.log(`El contador ha sido incrementado a: ${counter}`)
})

decrementButton.addEventListener('mouseover', () => {
  counter = 0;
  counterValue.textContent = counter;
  console.log('Counter reset to 0');
});


